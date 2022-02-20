
const cyView = require("cy-view");

const devices = [
	{
		model: "macbook-15",
		width: 1440,
		height: 900
	},
	{
		model: "ipad-2",
		width: 768,
		height: 1024
	},
	{
		model: "iphone-6+",
		width: 414,
		height: 736
	},
    {
		model: "iphone-6+ pro",
		width: 480,
		height: 780
	},
    {
		model: "iphone-7+",
		width: 390,
		height: 526
	},
    {
		model: "iphone-8+",
		width: 320,
		height: 870
	},
    {
		model: "iphone-13+",
		width: 450,
		height: 850
	},
];

// Add urls to test against
const urls = [
	"https://www.uos.edu.pk"
	
];

// Pass cy-view an array of devices structured like the devices constant above
const washingMachinePageTests = cyView(devices);

// Pass your urls constant in and your good to go!
washingMachinePageTests(urls, () => {
	describe("My tests running on all viewports across various URLs", () => {
		it("should test something...", () => {
			//...do yo' thang
		});
	});
});