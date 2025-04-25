try{
    // Para la conexion de la Base de datos
     Connection cn = DriverManager.getConnection("jdbc:mysql://localhost/empleados","root","");
     //Preparamos el select
     PreparedStatement pst = cn.prepareStatement("select * from r_empleado where Clave = ?");
     pst.setString(1, clave_buscar.getText().trim());
     //se utiliza para ejecutar una consulta SQL almacenada en un objeto 
     ResultSet rs = pst.executeQuery();
     
    // avanza al siguiente registro en el conjunto de resultados. Devuelve true si hay más registros y false si no hay más
    if(rs.next()){
        //establece el texto de un componente gráfico (como un campo de texto)
        // Este código es útil en interfaces gráficas para mostrar dinámicamente datos de una base de datos.
        clave.setText(rs.getString("Clave"));
        nombre.setText(rs.getString("Nombre"));
        domicilio.setText(rs.getString("Domicilio"));
        telefono.setText(rs.getString("Telefono"));
        email.setText(rs.getString("Email"));
        fecha.setText(rs.getString("Fecha"));
        sexo.setSelectedItem(rs.getString("Genero"));
        
        
    } else {
        JOptionPane.showMessageDialog(null,"El empleado no se encunetra registrado");
    }
}catch(Exception e){
    e.printStackTrace();
    mensaje.setText("Error");
}