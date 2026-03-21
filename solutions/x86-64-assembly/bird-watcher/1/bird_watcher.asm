default rel

section .data
LAST_WEEK dq 0x0004080703050200
INDEX     db 0x0

section .bss
CURRENT_WEEK resb 8

section .text

global last_week_counts
last_week_counts:
    mov rax, [LAST_WEEK]
    ret

global current_week_counts
current_week_counts:
    mov rax, [CURRENT_WEEK]
    xor rdx, rdx
    mov dl,  [INDEX]
    ret

global save_count
save_count:
    lea   r11, [CURRENT_WEEK]
    movzx edx, BYTE [INDEX]

    cmp   rdx, 7
    jae   .new_week

    mov BYTE [r11 + rdx], dil
    inc BYTE [INDEX]
    jmp .done

.new_week:
    mov r9, QWORD [r11]
    mov QWORD [LAST_WEEK], r9
    mov QWORD [r11], 0
    mov BYTE [r11], dil

    mov BYTE [INDEX], 1

.done:
    ret

global today_count
today_count:
    mov   al,  BYTE [INDEX]
    movzx rax, al

    lea   r11, [CURRENT_WEEK]
    mov   al,  BYTE [r11 + rax - 1]
    movzx rax, al
    ret

global update_today_count
update_today_count:
    mov   al,  BYTE [INDEX]
    movzx rax, al

    lea   r11, [CURRENT_WEEK]
    add   BYTE [r11 + rax - 1], dil

    ret

global update_week_counts
update_week_counts:
    lea r11, [CURRENT_WEEK]
    lea r10, [LAST_WEEK]

    mov r9,  [r11]
    mov QWORD [r10], r9

    mov QWORD [r11], rdi
    ret

%ifidn __OUTPUT_FORMAT__,elf64
section .note.GNU-stack noalloc noexec nowrite progbits
%endif
