WEIGHT_OF_EMPTY_BOX equ 500
TRUCK_HEIGHT equ 300
PAY_PER_BOX equ 5
PAY_PER_TRUCK_TRIP equ 220

section .text

global get_box_weight
get_box_weight:
    imul edi, esi
    imul edx, ecx
    mov eax, edi
    add eax, edx
    add eax, WEIGHT_OF_EMPTY_BOX
    ret

global max_number_of_boxes
max_number_of_boxes:
    mov rax, TRUCK_HEIGHT
    div dil
    ret

global items_to_be_moved
items_to_be_moved:
    mov eax, edi
    sub eax, esi
    ret

global calculate_payment
calculate_payment:
    imul rsi, PAY_PER_BOX
    imul rdx, PAY_PER_TRUCK_TRIP
    imul rcx, r8

    mov rax, rsi
    add rax, rdx
    sub rax, rcx
    sub rax, rdi

    movzx r9, r9b
    add r9, 1

    cqo
    idiv r9
    add rax, rdx
    ret

%ifidn __OUTPUT_FORMAT__,elf64
section .note.GNU-stack noalloc noexec nowrite progbits
%endif
