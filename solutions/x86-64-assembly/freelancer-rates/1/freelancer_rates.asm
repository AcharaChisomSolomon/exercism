default rel


section .data

DAILY_HOURS    dq 8.0
DAYS_PER_MONTH dq 22.0
FULL_PERCENT   dq 100.0


section .text

global daily_rate
daily_rate:
    mulsd xmm0, [DAILY_HOURS]
    ret

global apply_discount
apply_discount:
    movsd xmm2, xmm0

    divsd xmm1, [FULL_PERCENT]
    mulsd xmm2, xmm1

    subsd xmm0, xmm2
    ret

global monthly_rate
monthly_rate:
    call     daily_rate
    mulsd    xmm0, [DAYS_PER_MONTH]

    call     apply_discount
    roundsd  xmm0, xmm0, 2
    cvtsd2si rax, xmm0
    ret

global days_in_budget
days_in_budget:
    cvtsi2sd xmm2, rdi

    addsd    xmm1, [FULL_PERCENT]
    divsd    xmm1, [FULL_PERCENT]

    call     daily_rate

    mulsd    xmm2, xmm1
    divsd    xmm2, xmm0

    roundsd  xmm2, xmm2, 1
    cvtsd2si eax, xmm2
    ret

%ifidn __OUTPUT_FORMAT__,elf64
section .note.GNU-stack noalloc noexec nowrite progbits
%endif
