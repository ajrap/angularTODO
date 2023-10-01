import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReadAllComponent } from "./components/read-all/read-all.component";
import { FinalizadosComponent } from "./components/finalizados/finalizados.component";

const routes: Routes = [
  {
    //quando o path (url) for vazio, localhost:4200
    path: "",
    component: ReadAllComponent,
  },
  {
    //quando o path (url) for localhost:4200/Finalizados
    path: "finalizados",
    component: FinalizadosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
