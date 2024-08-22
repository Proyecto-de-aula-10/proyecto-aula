package com.proaula.demo.persistence.repository;

import com.proaula.demo.persistence.entity.Comentario;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ComentarioRepository extends JpaRepository<Comentario, Long> {

    @Query("SELECT c FROM Comentario c JOIN FETCH c.usuario WHERE c.producto.idProducto = :id")
    List<Comentario> findByProductoIdProducto(Long id);
}
