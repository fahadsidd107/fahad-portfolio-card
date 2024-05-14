import open, { openApp, apps } from "open";
import figlet from "figlet";
import colors from "colors"; // Assuming colors supports ESM
import qrcode from "qrcode-terminal"; // Assuming qrcode-terminal supports ESM
import fs from "fs";
import { dirname, normalize } from "path";
import enquirer from "enquirer";

const { Input } = enquirer; // Assuming enquirer supports ESM

const cvfile = new URL("./cv.pdf", import.meta.url).pathname;
const cvPath = cvfile.slice(1);
const prompt = new Input({
  name: "username",
  message:
    'Do you want to have a look at my CV ??, if yes press "y" then Enter. ',
});

prompt
  .run()
  .then((answer) => {
    if (answer === "y") {
      try {
        const cvData = fs.readFileSync(cvPath);
        console.log("\n");
        open(cvPath);
        console.log("\n");
        console.log("CV will be opened in your default browser.");
        console.log("\n");
        console.log(colors.rainbow("Danke Schon !!!"));
        console.log("\n");
      } catch (error) {
        console.error("Error downloading CV:", error);
      }
    }else{
      console.log("\n");
      console.log(colors.rainbow("Danke Schon !!!"));
      console.log("\n");
    }
    {
    }
  })
  .catch(console.error);

// Your portfolio URL and other details
const portfolioURL = "https://fahad-siddiqui-portfolio.vercel.app/";
const linkedinURL = "https://www.linkedin.com/in/fahad-siddiqui-595484176/";
const githubURL = "https://github.com/fahadsidd107";
const name = "Muhammad Fahad Siddiqui";
const tagline = "Full Stack (MERN Stack) Developer / Student";

// Function to display the card with ASCII art and colors
async function displayCard() {
  const asciiArt = await figlet.textSync(name, { font: "Standard" });

  console.log(colors.rainbow(asciiArt));
  console.log(colors.red(`**${tagline}**`));
  console.log("\n");
  console.log(
    colors.brightRed(`I am a MERN Stack / Full Stack web and mobile app developer with almost 2 years of experience,
with my expertise mainly lies in backend, specializing in scalable and user-friendly applications. Now in Frankfurt,
Germany, pursuing a Master’s in High Integrity Systems at Frankfurt University of Applied Sciences. Actively seeking
part-time roles in the field to apply my expertise and contribute to innovative projects. Committed to delivering high-quality
solutions that exceed client expectations.
  `)
  );
  console.log("Here are links to my Github,Linkedin and Portfolio etc :");
  console.log("\n");
  console.log(colors.yellow("Phone #: +4915214039055"));
  console.log(colors.gray("Email : fsiddiqui107@gmail.com"));
  console.log(colors.green(`LinkedIn: ${linkedinURL}`));
  console.log(colors.white(`GitHub: ${githubURL}`));
  console.log(
    colors.magenta(
      `Scan the QR code below to view the portfolio , you can do this this ULR : ${portfolioURL}`
    )
  );
  qrcode.generate(portfolioURL, { small: true });
}

displayCard();
console.log(colors.rainbow("Danke Schon !!!"));
// For testing purpose (optional)
