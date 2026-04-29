package org.iesvdm.campeonato;

public class Participante {

    //Atributo => ESTADO
    private String Nombre;
    private String Apellidos;
    private int edad;
    private String direccion;
    private String telefono;

    //Constructores
    public Participante() {


    }

    public Participante(String nombre, String apellidos, int edad, String direccion, String telefono) {
        Nombre = nombre;
        Apellidos = apellidos;
        this.edad = edad;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    //Getter y Setters

    public String getNombre() {
        return Nombre;
    }

    public void setNombre(String nombre) {
        Nombre = nombre;
    }

    public String getApellidos() {
        return Apellidos;
    }

    public void setApellidos(String apellidos) {
        Apellidos = apellidos;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    @Override
    public String toString() {
        return "Participante [Nombre=" + Nombre + ", Apellidos=" + Apellidos + ", edad=" + edad + ", direccion="
                + direccion + ", telefono=" + telefono + "]";
    }
    
    
}
