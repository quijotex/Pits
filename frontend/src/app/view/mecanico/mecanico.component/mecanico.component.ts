import { Component } from '@angular/core';
import { MecanicoService } from '../../../services/mecanico.service/mecanico.service';
import { ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mecanico.component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mecanico.component.html',
  styleUrl: './mecanico.component.css',
})
export class MecanicoComponent {
  userMecanico: any[] = [];

  constructor(private mecanicoService: MecanicoService , private cdt: ChangeDetectorRef){
    this.mecanicoService.getusersMecanico().subscribe(data =>{
      this.userMecanico = data;
      console.log(this.userMecanico);
      this.cdt.detectChanges(); // Detectar cambios manualmente
    
    });
  }
}
