import {
  Component, OnInit
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  templateUrl: './quest.component.html'
})
export class QuestComponent implements OnInit {
  private questData = [
    {
      id: 1,
      title: 'დავალება 1',
      key: '577',
      description: `პირველი, ყველაზე მარტივით დავიწყოთ... მიაკითხე ჰაბის ოთახს და out of stock ოვიჩი იკითხე, მაგას აქვს ჩანაცვლებული საჩუქარი`
    },
    {
      id: 2,
      title: 'დავალება 2',
      key: '12',
      description: `ყოჩაღ, კარგად გაართვი თავი! ამჯერად EXTRA-ს მარკეტინგს უნდა ეწვიო. იპოვე ყაფლანა და უთხარი როდის უნდა მაგულაო - თქო!! (კი, როგორც წერია ისე უნდა წარმოსთქვა :დ)`,
    },
    {
      id: 3,
      title: 'დავალება 3',
      key: '24',
      description: 'ჰოოომ არ მოიწყინე?? ანდაც რას მოიწყენდი უკრეატიულესი სანტის ხელში :D შემდეგი დავალება ასეთია: მიდი CM ის მაგიდასთან, იპოვე ქერა თმიანი კატეგორიის მენეჯერი და უთხარი რამე მეგრულად'
    },
    {
      id: 4,
      title: 'დავალება 4',
      key: '11',
      description: 'ცოტაც გაუძელი!! კარგად მიდიხარ!! დაბრუნდი მარკეტინგის მაგიდასთან და იკითხე აქ ვინდოუსს ვინ აყენებს - თქო'
    }
  ]



  public currentStepData: any = null;
  private currentStep: number | string = 1;
  public disableButton = true;
  public inputValue = null;
  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.setCurrentStep();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setCurrentStep();
      }
    })
  }

  private setCurrentStep(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      this.currentStep = +this.route.snapshot.paramMap.get('id')!;
    } else {
      this.currentStep = 1;
    }
    this.disableButton = true;
    this.inputValue = null;
    this.setCurrentStepData();
  }
  
  setCurrentStepData(): void {
    this.currentStepData = this.questData.find(item => item.id === +this.currentStep) || 1;
  }

  public getInput(event: any): void {
    if (event.target.value == this.currentStepData.key) {
      this.disableButton = false;
    } else {
      this.disableButton = true;
    }
  }

  public nextStep(): void {
    if (+this.currentStep < this.questData.length) {
      this.router.navigate(['/quest', +this.currentStep + 1]);
    } else {
      this.router.navigate(['final']);
    }
  }
}
