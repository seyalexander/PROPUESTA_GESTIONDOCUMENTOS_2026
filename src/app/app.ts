import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CarouselModule, AnimateOnScrollModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('propuesta-LDM');

  pantallas = [

    {
      titulo: 'Dashboard',
      subtitulo: 'Indicadores y métricas del sistema',
      descripcion: 'Visualización centralizada de documentos, procesos, usuarios y actividades recientes.',
      imagen: 'assets/mockups/dashboard.png'
    },

    {
      titulo: 'Gestión Documental',
      subtitulo: 'Control y búsqueda de documentos',
      descripcion: 'Consulta rápida de documentos mediante filtros avanzados, estados, procesos y versiones.',
      imagen: 'assets/mockups/RegistroDocumentos.png'
    },

    {
      titulo: 'Usuarios y Permisos',
      subtitulo: 'Seguridad basada en roles',
      descripcion: 'Administración de usuarios, roles y permisos especiales según necesidades operativas.',
      imagen: 'assets/mockups/GestionUsuarios.png'
    },

    // {
    //   titulo: 'Auditoría',
    //   subtitulo: 'Trazabilidad completa',
    //   descripcion: 'Registro detallado de accesos, consultas, modificaciones y actividades realizadas.',
    //   imagen: 'assets/mockups/auditoria.png'
    // }

  ];

  showScrollTop = false;

  @HostListener('window:scroll', [])
  onScroll() {
    this.showScrollTop = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }


}
