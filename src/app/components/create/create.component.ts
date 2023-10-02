import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Todo } from "src/app/models/todo";
import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"],
})
export class CreateComponent {
  todo: Todo = {
    titulo: "",
    descricao: "",
    dataParaFinalizar: new Date(),
    finalizado: false,
  };

  constructor(private router: Router, private service: TodoService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  create(): void {
    this.formataData();
    this.service.create(this.todo).subscribe(
      (resposta) => {
        this.service.message("To-do criado com sucesso!");
        this.router.navigate([""]);
      },
      (err) => {
        this.service.message("Falha ao criar To-do");
        this.router.navigate([""]);
      }
    );
    //console.log(this.todo.dataParaFinalizar);
  }

  cancel(): void {
    this.router.navigate([""]);
  }

  formataData(): void {
    let data = new Date(this.todo.dataParaFinalizar);
    this.todo.dataParaFinalizar = `${data.getDate()}/${
      data.getMonth() + 1
    }/${data.getFullYear()}`;
  }
}
