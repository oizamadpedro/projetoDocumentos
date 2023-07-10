const socket = io();

function emitirCadastrarUsuario(dados) {
    socket.emit("cadastrar_usuario", dados)
}

socket.on("cadastro_sucesso", () => alert("Cadastro realizado com sucesso"));
socket.on("cadastro_erro", () => alert("erro no cadastro. "));
socket.on("usuario_existente", () => alert("usuario already exists."));

export { emitirCadastrarUsuario };