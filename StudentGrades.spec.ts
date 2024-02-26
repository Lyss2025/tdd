import { describe, expect, it } from "@jest/globals";
import { StudentGrades } from "./StudentGrades";

describe("StudentGrades", () => {
  let grades: StudentGrades;

  // Run this code before every test
  beforeAll(() => {
    grades = new StudentGrades([35,88,89,91,69,72,56,100]);
  });

  it("can get the maximum value", () => {
    const result: number = grades.getMax();
    expect(result).toBe(100);
  });

  it("can get the minimum value", () => {
    const result: number =grades.getMin();
    expect(result).toBe(35);
    });

  it("can get the average", () =>{
    const result: number = grades.getAverage();
    expect(result).toBe(75);
  });

  it("can get the average without outliers",() =>{
    const result: number = grades.getAverageNoOutliers();
    expect(result).toBe(77.5);
  });
});
