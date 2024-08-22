package com.proaula.demo.api.controller;

import com.proaula.demo.domain.dto.UsuarioDTO;
import com.proaula.demo.domain.dto.ValidateUsuarioDTO;
import com.proaula.demo.domain.service.UsuarioServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
public class UsuarioController {

    @Autowired
    private UsuarioServices usuarioServices;

    @PostMapping("/usuario")
    public ResponseEntity<ValidateUsuarioDTO> registrarUsuario(@RequestBody UsuarioDTO usuarioDTO) {

        ValidateUsuarioDTO usuValidado = usuarioServices.registrarUsuario(usuarioDTO);

        if (usuValidado.isEsValido()) {
            return ResponseEntity.ok(usuValidado);
        } else {
            return ResponseEntity.badRequest().body(usuValidado);
        }

    }

    @PostMapping("/login")
    public ResponseEntity<ValidateUsuarioDTO> iniciarSesion(@RequestBody UsuarioDTO usuarioDTO) {
        ValidateUsuarioDTO usuValidado = usuarioServices.inicioUsuario(
                usuarioDTO.getEmail(),
                usuarioDTO.getPassword(),
                usuarioDTO.getTipoEntidad()
        );

        if (usuValidado.isEsValido()) {
            return ResponseEntity.ok(usuValidado);
        } else {
            return ResponseEntity.badRequest().body(usuValidado);
        }
    }

    @GetMapping("/usuarios")
    public ResponseEntity<ValidateUsuarioDTO> obtenerUsuarios(@RequestParam String tipoEntidad) {
        ValidateUsuarioDTO listUsuValidado = usuarioServices.obtenerUsuariosPorTipo(tipoEntidad);

        return ResponseEntity.ok(listUsuValidado);
    }

    @PutMapping("/usuario")
    public ResponseEntity<ValidateUsuarioDTO> actualizarUsuario(@RequestBody UsuarioDTO usuarioDTO) {
        ValidateUsuarioDTO usuValidado = usuarioServices.actualizarUsuario(usuarioDTO);

        if (usuValidado.isEsValido()) {
            return ResponseEntity.ok(usuValidado);
        } else {
            return ResponseEntity.badRequest().body(usuValidado);
        }

    }

}
