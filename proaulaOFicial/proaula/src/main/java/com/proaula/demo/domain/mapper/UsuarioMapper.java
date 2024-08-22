package com.proaula.demo.domain.mapper;

import com.proaula.demo.domain.dto.UsuarioDTO;
import com.proaula.demo.persistence.entity.Usuario;

public class UsuarioMapper {
    public static Usuario toEntityUsuario(UsuarioDTO usuarioDTO) {
        Usuario usuario = new Usuario();

        usuario.setIdUsuario(usuarioDTO.getIdUsuario());
        usuario.setEmail(usuarioDTO.getEmail());
        usuario.setPassword(usuarioDTO.getPassword());
        usuario.setNombreCompleto(usuarioDTO.getNombreCompleto());
        usuario.setNumeroDocumento(usuarioDTO.getNumeroDocumento());
        usuario.setTelefono(usuarioDTO.getTelefono());
        usuario.setTipoDocumento(usuarioDTO.getTipoDocumento());
        usuario.setTipoEntidad(usuarioDTO.getTipoEntidad());
        usuario.setProductosDonados(usuarioDTO.getProductosDonados());
        usuario.setProductosIntercambiados(usuarioDTO.getProductosIntercambiados());
        usuario.setProductosVendidos(usuarioDTO.getProductosVendidos());

        return usuario;
    }

    public static UsuarioDTO toDtoUsuario(Usuario usuario) {
        UsuarioDTO usuarioDTO = new UsuarioDTO();

        usuarioDTO.setIdUsuario(usuario.getIdUsuario());
        usuarioDTO.setEmail(usuario.getEmail());
        usuarioDTO.setPassword(usuario.getPassword());
        usuarioDTO.setNombreCompleto(usuario.getNombreCompleto());
        usuarioDTO.setNumeroDocumento(usuario.getNumeroDocumento());
        usuarioDTO.setTelefono(usuario.getTelefono());
        usuarioDTO.setTipoDocumento(usuario.getTipoDocumento());
        usuarioDTO.setTipoEntidad(usuario.getTipoEntidad());
        usuarioDTO.setProductosDonados(usuario.getProductosDonados());
        usuarioDTO.setProductosIntercambiados(usuario.getProductosIntercambiados());
        usuarioDTO.setProductosVendidos(usuario.getProductosVendidos());

        return usuarioDTO;
    }
}
