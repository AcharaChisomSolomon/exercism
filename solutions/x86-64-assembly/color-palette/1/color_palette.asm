default rel


section .rodata

global RED
global BLUE
global GREEN

RED   dd 0xFF000000
BLUE  dd 0x0000FF00
GREEN dd 0x00FF0000


section .data

global base_color
base_color dd 0xFFFFFF00


section .text

global get_color_value
get_color_value:
    mov rax, [rdi]
    ret

global add_base_color
add_base_color:
    mov eax, dword [rdi]
    mov DWORD [base_color], eax
    ret

extern combining_function

global make_color_combination
make_color_combination:
    mov r11, rdi
    mov edi, DWORD [base_color]
    mov esi, DWORD [rsi]
    call combining_function

    mov DWORD [r11], eax
    ret

%ifidn __OUTPUT_FORMAT__,elf64
section .note.GNU-stack noalloc noexec nowrite progbits
%endif
