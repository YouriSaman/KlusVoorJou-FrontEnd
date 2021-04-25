import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/classes/job';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  jobs: Job[] = [
    new Job("Grasmaaien", "https://www.makita.nl/data/ab/public/tuincentrum/Keuzehulp/plm4631n2_4-takt_grasmaaier-5.jpg", "Voor en achtertuin grasmaaien", "5673PS", "Nuenen"),
    new Job("Schoonmaken", "https://schoonmakenmetmarja.nl/wp-content/uploads/2020/09/Efficient-schoonmaken.jpg", "Keuken en badkamer schoonmaken", "4814HT", "Breda"),
    new Job("Meterkast", "https://elektricienaanhuis.nl/wp-content/uploads/2017/10/close-up-elektricien.jpg", "Elektriciteitsdraden leggen in de meterkast", "5623EK", "Eindhoven"),
    new Job("Oppas", "https://www.babybytes.nl/assets/images/Blogs/0/05/053f772179da8165a5456c19b364fc5b.jpg", "Oppas gezocht voor dochter en zoon", "5282VG", "Boxtel")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
