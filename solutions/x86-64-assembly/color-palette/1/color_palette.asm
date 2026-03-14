default rel

section .rodata
global RED
global GREEN
global BLUE

RED    dd 0xFF000000    ; Full red:   R=FF, G=00, B=00, A=00
GREEN  dd 0x00FF0000    ; Full green: R=00, G=FF, B=00, A=00
BLUE   dd 0x0000FF00    ; Full blue:  R=00, G=00, B=FF, A=00

section .data
global base_color
base_color dd 0xFFFFFF00       ; White with alpha 00 

section .text
global get_color_value
get_color_value:
    mov eax, dword [rdi]
    ret

global add_base_color
add_base_color:
    mov eax, dword [rdi]
    mov dword [base_color], eax
    ret

extern combining_function

global make_color_combination
make_color_combination:
    push   rdi                         ; save output pointer on stack
    mov    eax, dword [base_color]
    mov    edx, dword [rsi]
    mov    rdi, rax
    mov    rsi, rdx
    call   combining_function
    pop    rdi                         ; restore output pointer
    mov    dword [rdi], eax
    ret

%ifidn __OUTPUT_FORMAT__,elf64
section .note.GNU-stack noalloc noexec nowrite progbits
%endif
