/// <reference path="../reference.ts" />

namespace cmd {

	export class Event {

		// --------------------------------------------------
		//
		// EVENT TYPE
		//
		// --------------------------------------------------

		public static COMPLETE: string = "complete";





		// --------------------------------------------------
		//
		// CONSTRUCTOR
		//
		// --------------------------------------------------

		constructor(type:string, target:object, data:any = null) {
			this.type = type;
			this.target = target;
			this.data = data;
		}





		// --------------------------------------------------
		//
		// MEMBER
		//
		// --------------------------------------------------

		public getType():string { return this.type; }
		private type:string;

		public getTarget():object { return this.target; }
		private target:object;

		public getData():any { return this.data; }
		public setData(data:any):void { this.data = data; }
		private data:any;
	}
}