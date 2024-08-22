package com.proaula.demo.domain.service;

import com.proaula.demo.domain.common.MensajesError;
import com.proaula.demo.domain.dto.ProductoDTO;
import com.proaula.demo.domain.dto.ValidateProductoDTO;
import com.proaula.demo.domain.mapper.ProductoMapper;
import com.proaula.demo.persistence.entity.Producto;
import com.proaula.demo.persistence.repository.ProductoRepository;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductoServices {

    @Autowired
    private ProductoRepository productoRepository;

    public ValidateProductoDTO registrarProducto(ProductoDTO productoDTO) {
        ValidateProductoDTO valiProdu = new ValidateProductoDTO();

        try {

            if (productoRepository.existsByNombreProducto(productoDTO.getNombreProducto())) {
                valiProdu.setMensaje(MensajesError.PRODUCTO_YA_EXISTE);
                valiProdu.setEsValido(false);
                return valiProdu;
            }
            
            Producto produDB = productoRepository.save(ProductoMapper.toEntity(productoDTO));
            productoDTO.setIdProducto(produDB.getIdProducto());

            valiProdu.setMensaje(MensajesError.REGISTRO_PRODUCTO_CORRECTO);
            valiProdu.setEsValido(true);
            valiProdu.setProductoDTO(productoDTO);

        } catch (Exception e) {
            System.out.println(MensajesError.ERROR_BD_REGISTRAR_PRODUCTO + e);
        }

        return valiProdu;
    }

    public ValidateProductoDTO obtenerProductos() {
        ValidateProductoDTO valiProdu = new ValidateProductoDTO();

        try {
            List<ProductoDTO> listaProductos = productoRepository.findAll()
                    .stream().map(ProductoMapper::toDTO)
                    .collect(Collectors.toList());

            if (listaProductos.isEmpty()) {
                valiProdu.setMensaje(MensajesError.PRODUCTOS_NO_ENCONTRADOS);
                valiProdu.setEsValido(false);
            } else {
                valiProdu.setMensaje(MensajesError.CONSULTA_PRODUCTO_EXITOSA);
                valiProdu.setEsValido(true);
                valiProdu.setListaproductos(listaProductos);
            }
        } catch (Exception e) {
            System.out.println(MensajesError.ERROR_CONSULTA_PRODUCTO + e);
        }

        return valiProdu;
    }

    public ValidateProductoDTO obtenerProductosPorTipoProducto(String categoria) {
        ValidateProductoDTO valiProdu = new ValidateProductoDTO();

        try {
            List<ProductoDTO> listaProductos = productoRepository.findByTipoProducto(categoria).stream().map(ProductoMapper::toDTO).collect(Collectors.toList());

            if (listaProductos.isEmpty()) {
                valiProdu.setMensaje(MensajesError.PRODUCTOS_NO_ENCONTRADOS);
                valiProdu.setEsValido(false);
            } else {
                valiProdu.setMensaje(MensajesError.CONSULTA_PRODUCTO_EXITOSA);
                valiProdu.setEsValido(true);
                valiProdu.setListaproductos(listaProductos);
            }
        } catch (Exception e) {
            System.out.println(MensajesError.ERROR_CONSULTA_PRODUCTO + e);
        }

        return valiProdu;
    }

   public ValidateProductoDTO obtenerProductosUsuario(Long idUsuario) {
        ValidateProductoDTO valiProdu = new ValidateProductoDTO();
        
        try {
            List<ProductoDTO> listaProductos = productoRepository.findByUsuarioIdUsuario(idUsuario).stream()
                    .map(ProductoMapper::toDTO)
                    .collect(Collectors.toList());
            
            if (listaProductos.isEmpty()) {
                valiProdu.setMensaje(MensajesError.PRODUCTOS_NO_ENCONTRADOS);
                valiProdu.setEsValido(false);
            } else {
                valiProdu.setMensaje(MensajesError.CONSULTA_PRODUCTO_EXITOSA);
                valiProdu.setEsValido(true);
                valiProdu.setListaproductos(listaProductos);
            }
        } catch (Exception e) {
            System.out.println(MensajesError.ERROR_CONSULTA_PRODUCTO + e);
        }
        
        return valiProdu;
    }

    public ValidateProductoDTO actualizarProducto(ProductoDTO productoDTO) {
        ValidateProductoDTO valiProdu = new ValidateProductoDTO();
        
        try {
            Producto producto = productoRepository.findByIdProducto(productoDTO.getIdProducto());
            
            if (producto == null) {
                valiProdu.setMensaje(MensajesError.PRODUCTO_NO_ENCONTRADO);
                valiProdu.setEsValido(false);
            } else {
                producto.setDisponibilidad(productoDTO.isDisponibilidad());

                productoRepository.save(producto);
                
                valiProdu.setMensaje(MensajesError.ACTUALIZACION_PRODUCTO_CORRECTA);
                valiProdu.setEsValido(true);
                valiProdu.setProductoDTO(ProductoMapper.toDTO(producto));
            }
        } catch (Exception e) {
            System.out.println(MensajesError.ERROR_BD_ACTUALIZAR + e);
        }
        
        return valiProdu;
    }

    public ValidateProductoDTO eliminarProducto(Long idProducto) {
        ValidateProductoDTO valiProdu = new ValidateProductoDTO();
        
        try {
            Producto producto = productoRepository.findByIdProducto(idProducto);
            
            if (producto == null) {
                valiProdu.setMensaje(MensajesError.PRODUCTO_NO_ENCONTRADO);
                valiProdu.setEsValido(false);
            } else {
                productoRepository.delete(producto);
                valiProdu.setMensaje(MensajesError.ELIMINACION_PRODUCTO_CORRECTA);
                valiProdu.setEsValido(true);
            }
        } catch (Exception e) {
            System.out.println(MensajesError.ERROR_BD_ELIMINAR_PRODUCTO + e);
        }
        
        return valiProdu;
    }

}
