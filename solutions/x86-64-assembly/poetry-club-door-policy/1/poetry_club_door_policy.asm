default rel

section .data
    outro_msg db ", please.", 0

section .text

global front_door_response
front_door_response:
    mov al, BYTE [rdi]
    ret

global front_door_password
front_door_password:
    xor rax, rax
    lea rdx, [rdi]
.loop:
    cmp BYTE [rdx], 0
    je  .done

    cmp rax, 0
    je  .handle_first
    ja  .handle_rest
.handle_first:
    cmp BYTE [rdx], 97
    jae .touppercase
    jmp .continue
.touppercase:
    sub BYTE [rdx], 32
    jmp .continue
.handle_rest:
    cmp BYTE [rdx], 97
    jb  .tolowercase
    jmp .continue
.tolowercase:
    add BYTE [rdx], 32
    jmp .continue
.continue:
    inc rax
    inc rdx
    jmp .loop
.done:
    ret

length:
    xor rax, rax
.loop:
    cmp BYTE [rdi+rax], 0
    je  .done

    inc rax
    jmp .loop
.done:
    ret
    
global back_door_response
back_door_response:
    call length
    mov rdx, rax
    dec rdx
.loop:
    cmp BYTE [rdi+rdx], 65
    jae .less_than_122
    dec rdx
    jmp .loop
.less_than_122:
    cmp BYTE [rdi+rdx], 122
    jbe .less_than_90
    dec rdx
    jmp .loop
.less_than_90:
    cmp BYTE [rdi+rdx], 90
    jbe .done
    jmp .greater_than_97
.greater_than_97:
    cmp BYTE [rdi+rdx], 97
    jae .done
    dec rdx
    jmp .loop
.done:
    xor rax, rax
    mov al, BYTE [rdi+rdx]
    ret


global back_door_password
back_door_password:
    push rdi
    mov rdi, rsi
    call front_door_password
    mov rax, rdi
    pop rdi

    xor rdx, rdx      ; general   index
    xor r10, r10      ; outro_msg index
    xor r9,  r9
    lea r11, [outro_msg]
.first_loop:
    cmp BYTE [rax+rdx], 0
    je  .second_loop

    mov r9b, BYTE [rax+rdx]
    mov BYTE [rdi+rdx], r9b
    inc rdx
    jmp .first_loop
.second_loop:
    cmp BYTE [r11+r10], 0
    je  .done

    mov r9b, BYTE [r11+r10]
    mov BYTE [rdi+rdx], r9b
    inc rdx
    inc r10
    jmp .second_loop
.done:
    mov BYTE [rdi+rdx], 0
    ret

%ifidn __OUTPUT_FORMAT__,elf64
section .note.GNU-stack noalloc noexec nowrite progbits
%endif
