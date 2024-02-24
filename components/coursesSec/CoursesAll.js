import Container from '../layout/Container';
import SubHeading from '../layout/SubHeading';
import List from '../layout/List';
import Link from 'next/link';

const CoursesAll = () => {
  return (
    <Container>
      <div className="pt-8 xl:py-20">
        <div className="text-center">
          <SubHeading
            className="text-sm md:text-base lg:text-lg xl:text-xl yellow-gr2 font-pop font-bold"
            title="COURSES"
          />
          <div className=" leading-[36px] mx-auto w-[100%] sm:w-[80%] xl:w-[70%] lg:pt-8 lg:pb-4 sm:leading-[44px] md:leading-[58px] text-center">
            <h2 className=" text-[28px] sm:text-[36px] md:text-[40px] lg:text-[52px] inline font-pop font-semibold text-primary">
              Here Are Many Courses Link
            </h2>
            &nbsp;
            &nbsp;
            <h2 className=" text-[28px] sm:text-[36px] md:text-[40px]  inline lg:text-[52px] font-pop font-semibold yellow-gr2">
               Which Are Developed Your Skills
            </h2>
          </div>
        </div>
        <div className="pt-10 sm:pt-14 lg:pt-16 xl:py-20 flex justify-between flex-wrap px-10">
          <div className="w-[100%] sm:w-[45%] flex flex-wrap justify-between">
            <List className="list-disc w-2/4">
              <li class="text-green-500  text-xl font-medium py-1">
                <Link
                  href="https://drive.google.com/drive/folders/1KYRN9tjW6q0iqrFLf2zTkYpv7krleQBq?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p
                    title="Click to Learn"
                    class="text-primary font-pop hover:text-blue-500"
                  >
                    MS Excel
                  </p>
                </Link>
              </li>
              <li class="text-green-500  text-xl font-medium py-1">
                <Link
                  href="https://drive.google.com/drive/folders/1iiQPgxPNClECJmhGc2aATgqZLPvEKDzM?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p
                    title="Click to Learn"
                    class="text-primary font-pop hover:text-blue-500"
                  >
                    Accounting Basic
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
              
            </List>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CoursesAll;
