export class StudentGrades {
    private grades: number[];

    constructor(intGrades: number[] = []){
        this.grades = [...intGrades];
    }

    public getMax(): number {
       return this.grades.reduce( (max, current)=>{
        if(current > max){
            return current;
        }
        else{
            return max;
        }
    }, this.grades[0]);
    }

    public getMin(): number {
       let min = this.grades[0];
       this.grades.forEach((grades) => {
        if (grades<min){
            min = grades;
        }
       });
       return min;
    }

    public getAverage(): number {
        let sum = 0;
        for (let i = 0; i < this.grades.length; i++){
            sum += this.grades[i];
        }
        return sum/8;
    }

    public getAverageNoOutliers(): number{
        let sum = 0
        for (let i = 0; i < this.grades.length; i++){
            sum += this.grades[i];
        }
        sum = sum - this.getMax() - this.getMin();
        return sum/6;
    }
}
