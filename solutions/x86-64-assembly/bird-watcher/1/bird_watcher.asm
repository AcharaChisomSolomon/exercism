default rel


section .data

LAST_WEEK    db 0, 2, 5, 3, 7, 8, 4, 0
COUNT        dq 0


section .bss

CURRENT_WEEK resb 8


section .text

global last_week_counts
last_week_counts:
    mov rax, QWORD [LAST_WEEK]
    ret

global current_week_counts
current_week_counts:
    mov rax, QWORD [CURRENT_WEEK]
    mov rdx, [COUNT]
    ret

global save_count
save_count:
    cmp QWORD [COUNT], 7
    jae .new_week

    jmp .add_day
.new_week:
    mov  r11, QWORD [CURRENT_WEEK]
    xchg r11, QWORD [LAST_WEEK]
    mov  QWORD [CURRENT_WEEK], 0

    mov  QWORD [COUNT], 0
.add_day:
    lea  r11, [CURRENT_WEEK]
    mov  r10, [COUNT]
    mov  BYTE [r11 + r10], dil
    inc  QWORD [COUNT]
    ret

global today_count
today_count:
    lea r11, [CURRENT_WEEK]
    mov r10, [COUNT]
    dec r10
    
    mov al,  BYTE [r11 + r10]
    ret

global update_today_count
update_today_count:
    lea r11, [CURRENT_WEEK]
    mov r10, [COUNT]
    dec r10

    add BYTE [r11 + r10], dil
    ret

global update_week_counts
update_week_counts:
    mov  r11, QWORD [CURRENT_WEEK]
    xchg r11, QWORD [LAST_WEEK]
    mov  QWORD [CURRENT_WEEK], rdi

    mov  QWORD [COUNT], 7
    ret

%ifidn __OUTPUT_FORMAT__,elf64
section .note.GNU-stack noalloc noexec nowrite progbits
%endif
