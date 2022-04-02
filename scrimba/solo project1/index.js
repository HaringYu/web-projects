value = 20
document.getElementById("num-el").innerText = value
function calc() {
	let x, y, z
	x = 3.2808399 * value
	y = 0.264172052 * value
	z = 2.20462262 * value

	let a, b, c
	a = value / 3.2808399
	b = value / 0.264172052
	c = value / 2.20462262
    
    document.getElementById("length-el").innerText = `${value} meters = ${x.toFixed(3)} feet | ${value} feet = ${a.toFixed(3)} meters`
    document.getElementById("volume-el").innerText = `${value} liters = ${y.toFixed(3)} gallons | ${value} gallons = ${b.toFixed(3)} liters`
    document.getElementById("mass-el").innerText = `${value} kilos = ${z.toFixed(3)} pounds | ${value} pounds = ${c.toFixed(3)} kilos`
}
calc(value)

