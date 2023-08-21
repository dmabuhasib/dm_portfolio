import Container from '../layout/Container';
import SubHeading from '../layout/SubHeading';
import List from '../layout/List';
import Link from 'next/link';

const AboutSkillSec = () => {
  return (
    <Container>
      <div className="pt-8 xl:py-24">
        <div className="text-center">
          <SubHeading
            className="text-sm md:text-base lg:text-lg xl:text-xl yellow-gr2 font-pop font-bold"
            title="SKILL SET"
          />
          <div className=" leading-[36px] mx-auto w-[100%] sm:w-[80%] xl:w-[70%] lg:pt-8 lg:pb-4 sm:leading-[44px] md:leading-[58px] text-center">
            <h2 className=" text-[28px] sm:text-[36px] md:text-[40px] lg:text-[52px] inline font-pop font-semibold text-primary">
              We Have A Set Of
            </h2>
            &nbsp;
            <h2 className=" text-[28px] sm:text-[36px] md:text-[40px]  inline lg:text-[52px] font-pop font-semibold yellow-gr2">
              Skill With High Quality
            </h2>
          </div>
        </div>
        <div className="pt-10 sm:pt-14 lg:pt-16 xl:py-20 flex justify-between flex-wrap px-10">
          <div className="w-[100%] sm:w-[45%] flex flex-wrap justify-between">
            <List className="list-disc w-2/4">
              <li class="text-green-500  text-xl font-medium py-1">
                <Link
                  href="https://www.w3schools.com/html/default.asp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p
                    title="Click to Learn"
                    class="text-primary font-pop hover:text-blue-500"
                  >
                    HTML
                  </p>
                </Link>
              </li>
              <li class="text-green-500  text-xl font-medium py-1">
                <Link
                  href="https://www.w3schools.com/css/default.asp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p
                    title="Click to Learn"
                    class="text-primary font-pop hover:text-blue-500"
                  >
                    CSS
                  </p>
                </Link>
              </li>
              <li class="text-green-500  text-xl font-medium py-1">
                <Link
                  href="https://www.w3schools.com/js/default.asp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p
                    title="Click to Learn"
                    class="text-primary font-pop hover:text-blue-500"
                  >
                    JavaScript
                  </p>
                </Link>
              </li>
              <li class="text-green-500  text-xl font-medium py-1">
                <Link
                  href="https://www.w3schools.com/jquery/default.asp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p
                    title="Click to Learn"
                    class="text-primary font-pop hover:text-blue-500"
                  >
                    jQuery
                  </p>
                </Link>
              </li>
              <li class="text-green-500  text-xl font-medium py-1">
                <Link
                  href="https://www.w3schools.com/jquery/default.asp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p
                    title="Click to Learn"
                    class="text-primary font-pop hover:text-blue-500"
                  >
                    Tailwind CSS
                  </p>
                </Link>
              </li>
              <li class="text-green-500  text-xl font-medium py-1">
                <Link
                  href="https://www.w3schools.com/jquery/default.asp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p
                    title="Click to Learn"
                    class="text-primary font-pop hover:text-blue-500"
                  >
                    Bootstrap
                  </p>
                </Link>
              </li>
              <li class="text-green-500  text-xl font-medium py-1">
                <Link
                  href="https://mui.com/material-ui/getting-started/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p
                    title="Click to Learn"
                    class="text-primary font-pop hover:text-blue-500"
                  >
                    Material ui
                  </p>
                </Link>
              </li>
            </List>
            <List className="list-disc w-2/4">
              <li class="text-green-500  text-xl font-medium py-1">
                <Link
                  href="https://www.w3schools.com/html/default.asp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p
                    title="Click to Learn"
                    class="text-primary font-pop hover:text-blue-500"
                  >
                    React js
                  </p>
                </Link>
              </li>
              <li class="text-green-500  text-xl font-medium py-1">
                <Link
                  href="https://www.w3schools.com/html/default.asp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p
                    title="Click to Learn"
                    class="text-primary font-pop hover:text-blue-500"
                  >
                    Next js
                  </p>
                </Link>
              </li>
              <li class="text-green-500  text-xl font-medium py-1">
                <Link
                  href="https://www.w3schools.com/html/default.asp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p
                    title="Click to Learn"
                    class="text-primary font-pop hover:text-blue-500"
                  >
                    Vue js
                  </p>
                </Link>
              </li>
              <li class="text-green-500  text-xl font-medium py-1">
                <Link
                  href="https://www.w3schools.com/html/default.asp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p
                    title="Click to Learn"
                    class="text-primary font-pop hover:text-blue-500"
                  >
                    Redux
                  </p>
                </Link>
              </li>
              <li class="text-green-500  text-xl font-medium py-1">
                <Link
                  href="https://www.w3schools.com/html/default.asp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p
                    title="Click to Learn"
                    class="text-primary font-pop hover:text-blue-500"
                  >
                    Figma
                  </p>
                </Link>
              </li>
              <li class="text-green-500  text-xl font-medium py-1">
                <Link
                  href="https://www.w3schools.com/html/default.asp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p
                    title="Click to Learn"
                    class="text-primary font-pop hover:text-blue-500"
                  >
                    Chakra ui
                  </p>
                </Link>
              </li>
            </List>
          </div>
          <div className=" w-[100%] sm:w-[45%] flex flex-wrap justify-between mt-6 sm:mt-0">
            <List className="list-disc w-2/4">
              <li class="text-green-500  text-xl font-medium py-1">
                <Link
                  href="https://www.w3schools.com/html/default.asp"
                  rel="noopener noreferrer"
                  target="_blank" 
                >
                  <p
                    title="Click to Learn"
                    class="text-primary font-pop hover:text-blue-500"
                  >
                   Node jS
                  </p>
                </Link>
              </li>
              <li class="text-green-500  text-xl font-medium py-1">
                <Link
                  href="https://www.w3schools.com/html/default.asp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p
                    title="Click to Learn"
                    class="text-primary font-pop hover:text-blue-500"
                  >
                   Express js
                  </p>
                </Link>
              </li>
              <li class="text-green-500  text-xl font-medium py-1">
                <Link
                  href="https://www.w3schools.com/html/default.asp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p
                    title="Click to Learn"
                    class="text-primary font-pop hover:text-blue-500"
                  >
                   REST APIs
                  </p>
                </Link>
              </li>
              <li class="text-green-500  text-xl font-medium py-1">
                <Link
                  href="https://www.w3schools.com/html/default.asp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p
                    title="Click to Learn"
                    class="text-primary font-pop hover:text-blue-500"
                  >
                  MongoDB
                  </p>
                </Link>
              </li>
              <li class="text-green-500  text-xl font-medium py-1">
                <Link
                  href="https://www.w3schools.com/html/default.asp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p
                    title="Click to Learn"
                    class="text-primary font-pop hover:text-blue-500"
                  >
                  Mongoose
                  </p>
                </Link>
              </li>
            </List>
            <List className="list-disc w-2/4">
              <li class="text-green-500  text-xl font-medium py-1">
                <Link
                  href="https://www.w3schools.com/html/default.asp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p
                    title="Click to Learn"
                    class="text-primary font-pop hover:text-blue-500"
                  >
                    Firebase
                  </p>
                </Link>
              </li>
              <li class="text-green-500  text-xl font-medium py-1">
                <Link
                  href="https://www.w3schools.com/html/default.asp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p
                    title="Click to Learn"
                    class="text-primary font-pop hover:text-blue-500"
                  >
                    MySql
                  </p>
                </Link>
              </li>
              <li class="text-green-500  text-xl font-medium py-1">
                <Link
                  href="https://www.w3schools.com/html/default.asp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p
                    title="Click to Learn"
                    class="text-primary font-pop hover:text-blue-500"
                  >
                    npm
                  </p>
                </Link>
              </li>
              <li class="text-green-500  text-xl font-medium py-1">
                <Link
                  href="https://www.w3schools.com/html/default.asp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p
                    title="Click to Learn"
                    class="text-primary font-pop hover:text-blue-500"
                  >
                    Vercel
                  </p>
                </Link>
              </li>
              <li class="text-green-500  text-xl font-medium py-1">
                <Link
                  href="https://www.w3schools.com/html/default.asp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p
                    title="Click to Learn"
                    class="text-primary font-pop hover:text-blue-500"
                  >
                    TypeScript
                  </p>
                </Link>
              </li>
            </List>
          </div>
          <div className="w-[100%] sm:w-[10%] mt-6 sm:mt-0">
            <List className="list-disc">
              <li class="text-green-500  text-xl font-medium py-1">
                <Link
                  href="https://www.w3schools.com/html/default.asp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p
                    title="Click to Learn"
                    class="text-primary font-pop hover:text-blue-500"
                  >
                     Git
                  </p>
                </Link>
              </li>
              <li class="text-green-500  text-xl font-medium py-1">
                <Link
                  href="https://www.w3schools.com/html/default.asp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p
                    title="Click to Learn"
                    class="text-primary font-pop hover:text-blue-500"
                  >
                     Bitbucket
                  </p>
                </Link>
              </li>
              <li class="text-green-500  text-xl font-medium py-1">
                <Link
                  href="https://www.w3schools.com/html/default.asp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p
                    title="Click to Learn"
                    class="text-primary font-pop hover:text-blue-500"
                  >
                     AZURE
                  </p>
                </Link>
              </li>
              <li class="text-green-500  text-xl font-medium py-1">
                <Link
                  href="https://www.w3schools.com/html/default.asp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p
                    title="Click to Learn"
                    class="text-primary font-pop hover:text-blue-500"
                  >
                    Jira
                  </p>
                </Link>
              </li>
              <li class="text-green-500  text-xl font-medium py-1">
                <Link
                  href="https://www.w3schools.com/html/default.asp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p
                    title="Click to Learn"
                    class="text-primary font-pop hover:text-blue-500"
                  >
                    Linux
                  </p>
                </Link>
              </li>
              <li class="text-green-500  text-xl font-medium py-1">
                <Link
                  href="https://www.w3schools.com/html/default.asp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p
                    title="Click to Learn"
                    class="text-primary font-pop hover:text-blue-500"
                  >
                    AWS API
                  </p>
                </Link>
              </li>
              <li class="text-green-500  text-xl font-medium py-1">
                <Link
                  href="https://www.w3schools.com/html/default.asp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p
                    title="Click to Learn"
                    class="text-primary font-pop hover:text-blue-500"
                  >
                    Hosting
                  </p>
                </Link>
              </li>
            </List>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutSkillSec;
