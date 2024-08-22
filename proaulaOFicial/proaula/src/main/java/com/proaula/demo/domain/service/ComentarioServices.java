package com.proaula.demo.domain.service;

import com.proaula.demo.domain.common.MensajesError;
import com.proaula.demo.domain.dto.ComentarioDTO;
import com.proaula.demo.domain.dto.ValidateComentarioDTO;
import com.proaula.demo.domain.mapper.ComentarioMapper;
import com.proaula.demo.persistence.entity.Comentario;
import com.proaula.demo.persistence.repository.ComentarioRepository;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ComentarioServices {

    @Autowired
    private ComentarioRepository comentarioRepository;

    public ValidateComentarioDTO registrarComentario(ComentarioDTO comentarioDTO) {
        ValidateComentarioDTO valiComent = new ValidateComentarioDTO();

        try {
            // Save the new comment to the database
            Comentario comentDB = comentarioRepository.save(ComentarioMapper.toEntity(comentarioDTO));
            comentarioDTO.setIdCommentario(comentDB.getIdCommentario());

            valiComent.setMensaje(MensajesError.REGISTRO_COMENTARIO_CORRECTO);
            valiComent.setEsValido(true);
            valiComent.setComentarioDTO(comentarioDTO);

        } catch (Exception e) {
            System.out.println(MensajesError.ERROR_BD_REGISTRAR_COMENTARIO + e);
        }

        return valiComent;
    }

    public ValidateComentarioDTO obtenerComentariosDeXProducto(Long idProducto) {
        ValidateComentarioDTO valiComent = new ValidateComentarioDTO();

        try {
            List<Comentario> comentarios = comentarioRepository.findByProductoIdProducto(idProducto);
            List<ComentarioDTO> comentarioDTOs = comentarios.stream()
                    .map(ComentarioMapper::toDTO)
                    .collect(Collectors.toList());

            if (comentarioDTOs.isEmpty()) {
                valiComent.setMensaje(MensajesError.NO_COMENTARIOS_ENCONTRADOS);
                valiComent.setEsValido(false);
            } else {
                valiComent.setMensaje(MensajesError.COMENTARIOS_ENCONTRADOS);
                valiComent.setEsValido(true);
                valiComent.setListaComentarios(comentarioDTOs);
            }

        } catch (Exception e) {
            System.out.println(MensajesError.ERROR_BD_OBTENER_COMENTARIOS + e);
        }

        return valiComent;
    }
}
