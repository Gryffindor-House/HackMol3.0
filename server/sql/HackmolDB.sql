-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: hackmol
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `disaster_map`
--

DROP TABLE IF EXISTS `disaster_map`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `disaster_map` (
  `ID` int NOT NULL,
  `Description` longtext NOT NULL,
  `Latitude` float NOT NULL,
  `Longitude` float NOT NULL,
  `Type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ID`)
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `disaster_map`
--

LOCK TABLES `disaster_map` WRITE;
/*!40000 ALTER TABLE `disaster_map` DISABLE KEYS */;
INSERT INTO `disaster_map` VALUES (1,'In last year alonethree cyclones hit Pulianthope pretty bad',13.1236,80.2564,'Floods'),(2,'In Pattalam, many roads were blocked as a result of fallen trees.',13.1001,80.2615,'Floods'),(3,'In Perambalur many residences have been inundanted.',11.2342,78.8807,'Storm'),(4,'Kalpakkam has been an active zone for tsunami alerts',12.5238,80.1568,'Tsunami'),(5,'Nilgiris has been a very landslide prone region in the south.',11.4916,76.7337,'Landslide'),(6,'Western Ghats also has been an area that has a lot of relief camps set up to deal with frequesnt occuring landslides.',10.1667,77.0667,'Landslides'),(7,'Cuddalore faced some of the worst loss in the infamous tsunami and has been prone to tsunamis.',11.748,79.7714,'Tsunamis'),(8,'This town near Cuddalore also gets worst affected by Tsunamis.',11.1503,79.8437,'Tsunami'),(9,'This Panchayat town very close to Velankani gets hit by Tsunami but suffers worse at hands of floods.',10.6819,79.8437,'Floods'),(10,'This residential locality often gets its street filled with stagnant water that doesnt get drained easily.',13.0373,80.2123,'Floods');
/*!40000 ALTER TABLE `disaster_map` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-27 11:20:27
