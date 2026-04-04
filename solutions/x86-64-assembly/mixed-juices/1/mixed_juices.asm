default rel


section .data

DRINK_TIMES db 1, 3, 3, 4, 5, 4, 7, 10


section .text

global time_to_make_juice
time_to_make_juice:
    lea r11, [DRINK_TIMES]
    xor rax, rax
    mov al, BYTE [r11 + rdi - 1]
    ret

global time_to_prepare
time_to_prepare:
    mov  rdx, rdi     ; address of array start
    mov  r10, 0       ; index
    mov  r9,  0       ; cummulative sum
.loop:
    cmp  r10d, esi
    jae  .end

    mov  edi, DWORD [rdx + r10*4]
    call time_to_make_juice
    add  r9d, eax

    inc  r10d
    jmp  .loop
.end:
    mov eax, r9d
    ret

wedge_value:
    cmp dil, 'S'
    je  .small
    cmp dil, 'M'
    je  .medium

    mov rax, 10
    jmp .end
.small:
    mov rax, 6
    jmp .end
.medium:
    mov rax, 8
.end:
    ret

global limes_to_cut
limes_to_cut:
    ; rsi - array address of lime size
    mov r11, rdi   ; given total
    mov r10, 0     ; total
    mov r9,  0     ; index
.loop:
    cmp r10, r11
    jae .end
    cmp r9, rdx
    jae .end

    mov dil, BYTE [rsi + r9]
    call wedge_value
    add  r10, rax
    inc  r9
    jmp  .loop
.end:
    mov rax, r9
    ret

global remaining_orders
remaining_orders:
    ; rsi - arr address of drinks to make
    mov edx, edi     ; total time left
    mov r10, 0       ; time used
    mov r9, 0       ; index / number of drinks made
.loop:
    cmp r10, rdx
    jae  .end

    mov edi, DWORD [rsi + r9*4]
    call time_to_make_juice
    add  r10, rax
    inc  r9
    jmp  .loop
.end:
    mov rax, r9
    ret

%ifidn __OUTPUT_FORMAT__,elf64
section .note.GNU-stack noalloc noexec nowrite progbits
%endif
