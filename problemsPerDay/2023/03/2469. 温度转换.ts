function convertTemperature(celsius: number): number[] {
    const Fahrenheit = celsius * 1.8 + 32;
    const Kelvin = celsius + 273.15;

    return [Kelvin, Fahrenheit];
}
