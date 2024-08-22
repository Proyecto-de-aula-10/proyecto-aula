package com.proaula.demo.api.controller;

import com.proaula.demo.domain.dto.ProductoDTO;
import com.proaula.demo.domain.dto.ValidateProductoDTO;
import com.proaula.demo.domain.service.ProductoServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
public class ProductoController {

    @Autowired
    private ProductoServices productoServices;
    
    @PostMapping("/producto")
    public ResponseEntity<ValidateProductoDTO> registrarProducto(@RequestBody ProductoDTO productoDTO) {
        ValidateProductoDTO productoValidado = productoServices.registrarProducto(productoDTO);

        if (productoValidado.isEsValido()) {
            return ResponseEntity.ok(productoValidado);
        } else {
            return ResponseEntity.badRequest().body(productoValidado);
        }
    }

    @GetMapping("/productos")
    public ResponseEntity<ValidateProductoDTO> obtenerProductos() {
        ValidateProductoDTO productosValidado = productoServices.obtenerProductos();

        if (productosValidado.isEsValido()) {
            return ResponseEntity.ok(productosValidado);
        } else {
            return ResponseEntity.badRequest().body(productosValidado);
        }
    }

    @GetMapping("/productos/categoria")
    public ResponseEntity<ValidateProductoDTO> obtenerProductosPorTipoProducto(@RequestParam String categoria) {
        ValidateProductoDTO productosValidado = productoServices.obtenerProductosPorTipoProducto(categoria);

        if (productosValidado.isEsValido()) {
            return ResponseEntity.ok(productosValidado);
        } else {
            return ResponseEntity.badRequest().body(productosValidado);
        }
    }

    @GetMapping("/productos/usuario/{idUsuario}")
    public ResponseEntity<ValidateProductoDTO> obtenerProductosUsuario(@PathVariable Long idUsuario) {
        ValidateProductoDTO productosValidado = productoServices.obtenerProductosUsuario(idUsuario);

        if (productosValidado.isEsValido()) {
            return ResponseEntity.ok(productosValidado);
        } else {
            return ResponseEntity.badRequest().body(productosValidado);
        }
    }

    @PutMapping("/producto")
    public ResponseEntity<ValidateProductoDTO> actualizarProducto(@RequestBody ProductoDTO productoDTO) {
        ValidateProductoDTO productoValidado = productoServices.actualizarProducto(productoDTO);

        if (productoValidado.isEsValido()) {
            return ResponseEntity.ok(productoValidado);
        } else {
            return ResponseEntity.badRequest().body(productoValidado);
        }
    }

    @DeleteMapping("/producto/{idProducto}")
    public ResponseEntity<ValidateProductoDTO> eliminarProducto(@PathVariable Long idProducto) {
        ValidateProductoDTO productoValidado = productoServices.eliminarProducto(idProducto);

        if (productoValidado.isEsValido()) {
            return ResponseEntity.ok(productoValidado);
        } else {
            return ResponseEntity.badRequest().body(productoValidado);
        }
    }
}
