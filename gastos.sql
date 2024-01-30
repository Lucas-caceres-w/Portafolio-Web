USE control_acounts;

SELECT * FROM gastos;

DROP TABLE IF EXISTS saldos;
CREATE TABLE IF NOT EXISTS saldos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT, -- Si necesitas vincular los saldos a usuarios
    fecha DATE, -- La fecha de referencia para el saldo (mes y año)
    monto INT, -- El monto del saldo
    descripcion VARCHAR(255), -- Descripción opcional del saldo
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Fecha y hora de creación
    UNIQUE KEY unique_saldo (usuario_id, fecha) -- Asegura que haya un solo registro por usuario y fecha
);

DROP TABLE IF EXISTS usuario;
CREATE TABLE IF NOT EXISTS usuario (
	user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255),
    correo VARCHAR(255)
);

DROP TABLE IF EXISTS gastos;
CREATE TABLE IF NOT EXISTS gastos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT, -- Si necesitas vincular los gastos a usuarios
    fecha DATE, -- La fecha de referencia para el gasto (mes y año)
    monto INT, -- El monto del gasto
    descripcion VARCHAR(255), -- Descripción del gasto
    cuotas INT DEFAULT 0, -- Número de la cuota si es un gasto en cuotas
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Fecha y hora de creación
);

INSERT INTO usuario (username,correo) VALUES ('lukitas3','lucas.caceres.lc@hotmail.com');

INSERT INTO saldos (usuario_id,fecha,monto,descripcion,created_at) VALUES (1,CURRENT_DATE(),350000,'Sueldo PFA',CURRENT_DATE());

INSERT INTO gastos (usuario_id,fecha,monto,descripcion,cuotas,created_at) VALUES 
	(1,CURRENT_DATE(),80000,'Prestamo galicia',8,CURRENT_DATE()),
    (1,CURRENT_DATE(),5000,'Escuela emma',NULL,CURRENT_DATE);
