package com.proaula.demo.domain.mapper;

import com.proaula.demo.domain.dto.ComentarioDTO;
import com.proaula.demo.persistence.entity.Comentario;

public class ComentarioMapper {

    public static ComentarioDTO toDTO(Comentario comentario) {
        ComentarioDTO comentarioDTO = new ComentarioDTO();

        comentarioDTO.setIdCommentario(comentario.getIdCommentario());
        comentarioDTO.setComentario(comentario.getComentario());
        comentarioDTO.setNombreUsuarioEscritor(comentario.getNombreUsuarioEscritor());
        comentarioDTO.setFecha(comentario.getFecha());
        comentarioDTO.setProducto(comentario.getProducto());
        comentarioDTO.setUsuario(comentario.getUsuario());

        return comentarioDTO;
    }

    public static Comentario toEntity(ComentarioDTO dto) {
        Comentario comentario = new Comentario();

        comentario.setIdCommentario(dto.getIdCommentario());
        comentario.setComentario(dto.getComentario());
        comentario.setNombreUsuarioEscritor(dto.getNombreUsuarioEscritor());
        comentario.setFecha(dto.getFecha());
        comentario.setProducto(dto.getProducto());
        comentario.setUsuario(dto.getUsuario());

        return comentario;
    }

}
