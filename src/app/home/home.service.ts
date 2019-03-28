import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';

import { IEmpresas } from './empresas';

@Injectable()
export class HomeService {

	private _urlEmpresas = "api/empresa/empresa";

	constructor(private _http: HttpClient) { }

	getEmpresas(): Observable<IEmpresas[]>{
		//Inicializamos un nuevo onjeto de tipo HttpParams
		console.log( 'ServicesEmpresa' );
        let Params = new HttpParams();
        return this._http.get<IEmpresas[]>(this._urlEmpresas, {params: Params})//.catch(this.handleError);
	}

	// getEmpresas(): Observable<IEmpresas[]>{
	// 	//Inicializamos un nuevo onjeto de tipo HttpParams
	// 	console.log( 'ServicesEmpresa' );
    //     let Params = new HttpParams();
    //     return this._http.get<IEmpresas[]>(this._urlEmpresas, {params: Params})//.catch(this.handleError);
	// }
	
	private handleError(err: HttpErrorResponse) {
        console.error(err.message);
        return Observable.throw(err.message);
    }
}
