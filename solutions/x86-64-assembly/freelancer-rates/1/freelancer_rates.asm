default rel

section .data

HOURS_PER_DAY   dq 8.0
WHOLE_PERCENT   dq 100.0
DAYS_PER_MONTH  dq 22.0

section .text

global daily_rate
daily_rate:
    mulsd xmm0, [HOURS_PER_DAY]
    ret

global apply_discount
apply_discount:
    movsd xmm15, [WHOLE_PERCENT]
    subsd xmm15, xmm1
    divsd xmm15, [WHOLE_PERCENT]
    mulsd xmm0, xmm15
    ret

global monthly_rate
monthly_rate:
    call daily_rate

    mulsd xmm0, [DAYS_PER_MONTH]
    call apply_discount
    
    roundsd xmm15, xmm0, 2
    cvttsd2si rax, xmm15
    ret

global days_in_budget
days_in_budget:
    call daily_rate
    call apply_discount

    cvtsi2sd xmm15, rdi
    divsd xmm15, xmm0
    roundsd xmm15, xmm15, 1

    cvtsd2si eax, xmm15
    ret

%ifidn __OUTPUT_FORMAT__,elf64
section .note.GNU-stack noalloc noexec nowrite progbits
%endif
