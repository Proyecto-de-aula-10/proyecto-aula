-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: proyectoaula
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comentario`
--

DROP TABLE IF EXISTS `comentario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentario` (
  `id_commentario` int NOT NULL AUTO_INCREMENT,
  `comentario` varchar(255) DEFAULT NULL,
  `fecha` varchar(255) DEFAULT NULL,
  `nombre_usuario_escritor` varchar(255) DEFAULT NULL,
  `producto_id_producto` bigint DEFAULT NULL,
  `usuario_id_usuario` bigint DEFAULT NULL,
  PRIMARY KEY (`id_commentario`),
  KEY `FKmw66g125aa7ghxwu2fpo0lk4k` (`producto_id_producto`),
  KEY `FKbgrhjm7xjj8gymj98qj4jb0gb` (`usuario_id_usuario`),
  CONSTRAINT `FKbgrhjm7xjj8gymj98qj4jb0gb` FOREIGN KEY (`usuario_id_usuario`) REFERENCES `usuario` (`id_usuario`),
  CONSTRAINT `FKmw66g125aa7ghxwu2fpo0lk4k` FOREIGN KEY (`producto_id_producto`) REFERENCES `productos` (`id_producto`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentario`
--

LOCK TABLES `comentario` WRITE;
/*!40000 ALTER TABLE `comentario` DISABLE KEYS */;
INSERT INTO `comentario` VALUES (2,'Hola mundo','25/5/2024','Martin Simarra',13,2),(3,'Este es otro comentario, me gustaria mas info sobre el producto','25/5/2024','Camilo Salcedo',13,7),(4,'mohjklñdfsjdfskjsdfkjfsdpkdfs\n','25/5/2024','Camilo Salcedo',13,7),(5,'esta es shari','25/5/2024','sharick',13,8),(6,'akjakskksks','25/5/2024','sharick',13,8);
/*!40000 ALTER TABLE `comentario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id_producto` bigint NOT NULL AUTO_INCREMENT,
  `cantidad` int NOT NULL,
  `categoria` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `direccion_recogida` varchar(255) DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL,
  `nombre_producto` varchar(255) DEFAULT NULL,
  `precio` double NOT NULL,
  `tipo_producto` varchar(255) DEFAULT NULL,
  `usuario_id_usuario` bigint DEFAULT NULL,
  `disponibilidad` bit(1) NOT NULL,
  `empresa_dono_id_usuario` bigint DEFAULT NULL,
  `fecha` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_producto`),
  KEY `FK4m4t31kfrjysb2kd7mdo1qqyl` (`usuario_id_usuario`),
  KEY `FKlovbip56byoqn36ilpihq7o5l` (`empresa_dono_id_usuario`),
  CONSTRAINT `FK4m4t31kfrjysb2kd7mdo1qqyl` FOREIGN KEY (`usuario_id_usuario`) REFERENCES `usuario` (`id_usuario`),
  CONSTRAINT `FKlovbip56byoqn36ilpihq7o5l` FOREIGN KEY (`empresa_dono_id_usuario`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (7,20,'Alimentación','Algo bueno que donar amigos','Nariño calle bogota','Como Nuevo','Donando algo a la fundi fundi',0,'Donación',4,_binary '',3,'23/05/2024'),(8,30,'Música','kskjfjfkf','','Restaurado','Carro',30,'Vender',NULL,_binary '',NULL,NULL),(9,198,'Deportes','lamdkf','Nariño calle bogota','Como Nuevo','Donandoa',0,'Donación',6,_binary '',5,'24/5/2024'),(11,2222,'Audio y Vídeo','sffsdfdsfsd','Directo a USA','Con Defectos','ddffgg',3455,'Vender',NULL,_binary '',NULL,NULL),(12,334,'Bebés','fskjfd','Directo a USA','Reacondicionado','vediedo',234,'Vender',NULL,_binary '',NULL,NULL),(13,2,'Alimentación','jsfdkjsdf','Etc','Reacondicionado','Intercambiar',0,'Intercambiar',NULL,_binary '\0',NULL,NULL),(14,2222,'Belleza','sdklfslkdfskldsf','kjdfskfdksjkdsfl','Dañado','lkdsfkldlskfkldfs',0,'Intercambiar',NULL,_binary '\0',NULL,'25/5/2024'),(15,2,'Alimentación','jdsfkjdfskjdfs','kjksdfkjsdfkjsdf','Muy Bueno','3 kilos de arroz',0,'Donación',4,_binary '',3,'25/5/2024'),(16,1,'Alimentación','Este es un arroz bueno ','Zaragocilla','Nuevo','3 kilos y un gramo',0,'Donación',6,_binary '',3,'25/5/2024');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos_comprados`
--

DROP TABLE IF EXISTS `productos_comprados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos_comprados` (
  `id_producto_comprado` bigint NOT NULL AUTO_INCREMENT,
  `producto_id_producto` bigint DEFAULT NULL,
  `usuario_id_usuario` bigint DEFAULT NULL,
  PRIMARY KEY (`id_producto_comprado`),
  KEY `FK1fpjkm1ux3eopo254x6ukrdrj` (`producto_id_producto`),
  KEY `FKeeno4wl6qi88gudbewaqywops` (`usuario_id_usuario`),
  CONSTRAINT `FK1fpjkm1ux3eopo254x6ukrdrj` FOREIGN KEY (`producto_id_producto`) REFERENCES `productos` (`id_producto`),
  CONSTRAINT `FKeeno4wl6qi88gudbewaqywops` FOREIGN KEY (`usuario_id_usuario`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos_comprados`
--

LOCK TABLES `productos_comprados` WRITE;
/*!40000 ALTER TABLE `productos_comprados` DISABLE KEYS */;
/*!40000 ALTER TABLE `productos_comprados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id_usuario` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `nombre_empleado` varchar(255) DEFAULT NULL,
  `numero_documento` bigint DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `productos_donados` int NOT NULL,
  `productos_intercambiados` int NOT NULL,
  `productos_vendidos` int NOT NULL,
  `telefono` bigint DEFAULT NULL,
  `tipo_documento` varchar(255) DEFAULT NULL,
  `tipo_entidad` varchar(255) DEFAULT NULL,
  `nombre_completo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (2,'martin@gmail.com',NULL,10029173984,'12345',0,0,0,3006830410,'Cedula','Persona','Martin Simarra'),(3,'sharick@gmail.com',NULL,101010101010,'12345',0,0,0,20304950,'Nit','Empresa','Empresa Sharick'),(4,'Fundacion@gmail.com',NULL,101010123,'12345',0,0,0,34995950,'Cedula','Fundacion','Fundación nueva'),(5,'empresa1@gmail.com',NULL,1010101010,'12345',0,0,0,24040404,'Nit','Empresa','lalalalalalalaal'),(6,'Fundacion1@gmail.com',NULL,2020304040,'12345',0,0,0,4002343204,'Cedula','Fundacion','Pedro Rodriguez'),(7,'camilo@gmail.com',NULL,10012938484,'12345',0,0,0,3409506,'Cedula','Persona','Camilo Salcedo'),(8,'sha@gmail.com',NULL,1043637960,'3210',0,0,0,654534,'Cedula','Persona','sharick');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-26 10:51:13
