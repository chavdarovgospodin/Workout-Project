//workout model
export class Workout {
    constructor(public _id?: string,
        public name?: string,
        public description?: string,
        public duration?: string,
        public exercises?: string
        // public exercises?:{
        //      name?:string,
        //      description?:string,
        //      duration?:string,
        //      image?:string
        // }
    ) {
    }
}