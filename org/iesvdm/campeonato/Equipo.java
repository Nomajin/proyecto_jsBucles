package org.iesvdm.campeonato;

import java.util.Arrays;

public class Equipo {

    private String nombre;
    private String patrocinador;
    private String [] colorCamisetas = new String [2];
    private String categoria;
    private int numeroJugadores = 0;
    private String [] Jugadores = new String [512];
    
    
    
    public Equipo(String nombre, String patrocinador, String[] colorCamisetas, String categoria, int numeroJugadores,
            String[] jugadores) {
        this.nombre = nombre;
        this.patrocinador = patrocinador;
        this.colorCamisetas = colorCamisetas;
        this.categoria = categoria;
        this.numeroJugadores = numeroJugadores;
    }

    public String getCategoria() {
        return categoria;
    }



    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }



    public String[] getJugadores() {
        return Jugadores;
    }



    public void setJugadores(String[] jugadores) {
        Jugadores = jugadores;
    }



    public Equipo() {

        
    }


    public String getNombre() {
        return nombre;
    }



    public void setNombre(String nombre) {
        this.nombre = nombre;
    }



    public String getPatrocinador() {
        return patrocinador;
    }



    public void setPatrocinador(String patrocinador) {
        this.patrocinador = patrocinador;
    }



    public String[] getColorCamisetas() {
        return colorCamisetas;
    }



    public void setColorCamisetas(String[] colorCamisetas) {
        this.colorCamisetas = colorCamisetas;
    
    }

      public int getNumeroJugadores() {
        return numeroJugadores;
    }



    public void setNumeroJugadores(int numeroJugadores) {
        this.numeroJugadores = numeroJugadores;
    }


    @Override
    public String toString() {
        return "Equipo [nombre=" + nombre + ", patrocinador=" + patrocinador + ", colorCamisetas="
                + Arrays.toString(colorCamisetas) + ", categoria=" + categoria + ", numeroJugadores=" + numeroJugadores
                + ", Jugadores=" + Arrays.toString(Jugadores) + "]";

                for (int contador = 1; contador <= numeroJugadores; contador++){
                    E
                }
    }

    //Comportamiento

    public void añadirJugador (Participante participante) {

        this.Jugadores[numeroJugadores++] = participante;
    }

  


}