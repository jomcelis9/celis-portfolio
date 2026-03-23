import React from "react";
import { useNavigate } from "react-router";
import Rogos from "../assets/Rogos";
import ThePoint from "./ThePoint";
import tooth from "../assets/Images/icons8-tooth-100.png";
import Cover_534 from "../assets/Images/Cover_534.png";
import urbidontics from "../assets/Images/urbidontics.jpg";
import label_studio from "../assets/Images/label_studio.jpeg";
import dataset from "../assets/Images/dataset_impacted.png";
import icmip from "../assets/Images/ICMIP_Notif.png";
import ig from "../assets/Images/ig_photo.jpg";
const logos = new Rogos();

export default function ImpactedDental() {
  const navigate = useNavigate();

  return (
    <div className=" relative min-h-screen font-Satoshi bg-gray-950 text-neutral-200 font-sans py-20 px-6 md:px-12 flex flex-col items-center">
      {/* Gradient Header Background with Noise */}
      <div
        className="absolute top-0 left-0 w-full h-[500px] pointer-events-none z-0 opacity-70 [mask-image:linear-gradient(to_bottom,white,transparent)]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"), linear-gradient(135deg, #7ab4d8 0%, #4a7ab5 50%, #1c3275 100%)`,
          backgroundBlendMode: "overlay",
        }}
      ></div>

      {/* Navigate Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-8 left-6 md:top-12 md:left-12 z-20 flex items-center gap-2 text-white text-sm font-medium font-Satoshi cursor-pointer w-max after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[1px] after:bg-current after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-500 after:delay-150 after:ease-out bg-transparent border-none p-0"
      >
        ← Back to Programming
      </button>

      <div className="max-w-2xl w-full relative z-10 mt-12 md:mt-4">
        {/* Header Section */}
        <div className="flex items-start gap-6 md:gap-8">
          <div className="w-14 h-16 md:w-20 md:h-20 bg-transparent rounded-2xl overflow-hidden relative shadow-inner shrink-0 mt-3 md:mt-4">
            <img src= {tooth} alt="" className="object-cover w-full h-full" />
          </div>
          <h1 className="font-Satoshi text-5xl md:text-7xl lg:text-7xl font-normal tracking-tight text-white leading-[1.05]">
            Impacted 3rd molar classification
          </h1>
        </div>

        {/* Metadata Section */}
        <div className="mt-24 flex flex-col gap-6 w-full">
          <div className="flex items-baseline w-full">
            <span className="text-white text-lg md:text-xl shrink-0">Year</span>
            <div className="flex-grow border-b border-neutral-700 mx-4 opacity-50 relative top-[-6px]"></div>
            <span className="text-white text-lg md:text-xl shrink-0">
              2025-2026
            </span>
          </div>
          <div className="flex items-baseline w-full">
            <span className="font-Satoshi text-white text-lg md:text-xl shrink-0">
              My role
            </span>
            <div className="flex-grow border-b border-neutral-700 mx-4 opacity-50 relative top-[-6px]"></div>
            <span className="text-white text-lg md:text-xl shrink-0">
              Data Science, Machine learning
            </span>
          </div>
        </div>

        {/* Content Sections */}
        <div className="mt-20 w-full flex flex-col gap-16">
          <section>
            <div
              onClick={() => {
                const link = document.createElement("a");
                link.href =
                  "src/assets/Systematic Comparison of Hyperparameter Optimization Strategies for Winters Classification of Impacted Third Molars Using EfficientNet-V2-S.pdf";
                link.download =
                  "Systematic Comparison of Hyperparameter Optimization Strategies for Winters Classification of Impacted Third Molars Using EfficientNet-V2-S.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="max-w-4xl w-full mx-auto group cursor-pointer rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1"
            >
              {/* Document Preview (Cover) */}
              <div className="relative h-[400px] w-full bg-neutral-800 overflow-hidden border-b border-neutral-800">
                {/* Placeholder for PDF cover image */}
                <img
                  src={Cover_534}
                  alt="PDF Preview"
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                />

                {/* PDF Badge */}
                <div className="absolute top-6 right-6 bg-red-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-lg">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  PDF
                </div>

                {/* Hover Action Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-neutral-900/80 backdrop-blur-md border border-neutral-700 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Click to Download PDF
                  </div>
                </div>
              </div>

              {/* Card Content & Metadata */}
              <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex flex-col">
                  <h3 className="text-2xl font-Satoshi font-medium text-neutral-100 mb-2 group-hover:text-orange-400 transition-colors duration-300">
                    Systematic Comparison of Hyperparameter Optimization
                    Strategies for Winter's Classification of Impacted Third
                    Molars Using EfficientNet-V2-S.pdf
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-neutral-500 font-sans">
                    <span>Updated Today</span>
                    <span className="w-1 h-1 rounded-full bg-neutral-600"></span>
                    <span>4.2 MB</span>
                    <span className="w-1 h-1 rounded-full bg-neutral-600"></span>
                    <span>12 Pages</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl text-white my-8 font-normal tracking-tight">
                What we did
              </h2>
            </div>
            <p className="  text-xs md:text-xl m-10 leading-relaxed">
              As a fourth-year computer science student navigating the
              intersection of machine learning and healthcare, our thesis
              journey was both challenging and eye-opening. We set out to
              evaluate the performance of the EfficientNet-V2-S model in
              classifying impacted mandibular third molars—a condition that
              affects 16.7% to 68.6% of populations worldwide. Our goal was to
              determine whether a single-task or multi-task deep learning
              configuration would yield the most optimal accuracy for clinical
              surgical planning.{" "}
            </p>
            <p className="  text-xs md:text-xl m-10 leading-relaxed">
              Our first major hurdle was data collection. We reached out to
              local institutions across Davao City and successfully collaborated
              with Urbidontics Dental Clinic and Alexian Brothers Health and
              Wellness Center, while also supplementing our data with the Tufts
              dental database from the internet. To ensure the quality and
              relevance of our dataset, we applied strict filtering criteria:
              the images had to belong to patients aged 18 years or older,
              feature clearly impacted teeth, and we exclusively utilized the
              mandibular portion (the third and fourth quadrants) of the
              panoramic radiographs.
            </p>

            {/* Photo Block */}
            <div className="flex flex-col items-center justify-center">
              <img
                src={urbidontics}
                alt=""
                className=" w-lg align-center items-center rounded-xl"
              />
              <p className="text-neutral-400">
                <i>Urbidontics Data Gathering</i>
              </p>
            </div>

            <p className="  text-xs md:text-xl m-10 leading-relaxed">
              To build our ground truth, we utilized Label Studio, an
              open-source data labeling tool, allowing our collaborating
              dentists to remotely annotate and classify the images. The experts
              identified whether a tooth was impacted and classified them
              according to two primary clinical systems. For Pell & Gregory,
              this involved classifying the impaction depth (Class 1, 2, or 3)
              and spatial correlation (Position A, B, or C). For Winter's
              Classification, the dentists assessed the angulation of the
              impacted tooth.
            </p>
            {/* Photo Block */}
            <div className="flex flex-col items-center justify-center">
              <img
                src={label_studio}
                alt=""
                className=" w-lg align-center items-center rounded-xl"
              />
              <p className="text-neutral-400">
                <i>Label Studio user interface and classifcation</i>
              </p>
            </div>

            <p className="  text-xs md:text-xl m-10 leading-relaxed">
              During the data cleaning phase, we made a crucial strategic
              decision. We noticed that certain Winter's
              classifications—specifically the distoangular, buccal/lingual, and
              inverted positions—were rare cases. To prevent these from
              introducing noise into our model, we opted to remove them
              entirely, focusing our dataset purely on the vertical, horizontal,
              and mesioangular positions. To address the remaining class
              imbalances, particularly in the Pell & Gregory categories, we
              employed Virtual Synthetic Expansion to synthetically generate
              data and equalize our samples. We also applied a robust suite of
              data augmentation techniques, including translation, scaling,
              rotation, random resizing, color jitter, random horizontal flips,
              and Gaussian blur, to simulate variations in X-ray equipment and
              acquisition angles.
            </p>

            {/* Photo Block */}
            <div className="flex flex-col items-center justify-center">
              <img
                src={dataset}
                alt=""
                className=" w-lg align-center items-center rounded-xl"
              />
              <p className="text-neutral-400">
                <i>The dataset</i>
              </p>
            </div>

            <p className="  text-xs md:text-xl m-10 leading-relaxed">
              When it came to model training, we structured our experiment to
              compare EfficientNet-V2-S across three distinct configurations: a
              Pure Single-Task (ST×3) setup with independent models, a
              Multi-2-Task (MT2) predicting Pell & Gregory Class and Position
              jointly, and a unified Multi-3-Task (MT3) handling all
              classifications simultaneously.
            </p>

            <p className="  text-xs md:text-xl m-10 leading-relaxed">
              When it came to model training, we structured our experiment to
              compare EfficientNet-V2-S across three distinct configurations: a
              Pure Single-Task (ST×3) setup with independent models, a
              Multi-2-Task (MT2) predicting Pell & Gregory Class and Position
              jointly, and a unified Multi-3-Task (MT3) handling all
              classifications simultaneously.
            </p>

            <h2 className="text-3xl md:text-4xl text-white mb-6 font-normal tracking-tight">
              The result
              <h3 className="text-xl mt-2">Single-Task classification</h3>
            </h2>
            <div className="overflow-x-auto mt-5 rounded-xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-lg shadow-lg shadow-orange-500/40">
              <table className="w-full text-left text-sm text-neutral-300">
                <thead className="border-b border-neutral-800 bg-neutral-900/80 text-xs uppercase  ">
                  <tr>
                    <th scope="col" className="px-6 py-4 font-medium">
                      Task
                    </th>
                    <th scope="col" className="px-6 py-4 font-medium">
                      Accuracy
                    </th>
                    <th scope="col" className="px-6 py-4 font-medium">
                      Precision
                    </th>
                    <th scope="col" className="px-6 py-4 font-medium">
                      Recall
                    </th>
                    <th scope="col" className="px-6 py-4 font-medium">
                      F1 score
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800">
                  <tr className="hover:bg-neutral-800/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-neutral-200">
                      Winter’s Classification
                    </td>
                    <td className="px-6 py-4">0.8837</td>
                    <td className="px-6 py-4">0.9017</td>
                    <td className="px-6 py-4">0.8698</td>
                    <td className="px-6 py-4">0.8820</td>
                  </tr>
                  <tr className="hover:bg-neutral-800/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-neutral-200">
                      Pell & Gregory Class
                    </td>
                    <td className="px-6 py-4">0.7629</td>
                    <td className="px-6 py-4">0.6245</td>
                    <td className="px-6 py-4">0.4966</td>
                    <td className="px-6 py-4">0.5273</td>
                  </tr>
                  <tr className="hover:bg-neutral-800/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-neutral-200">
                      Pell & Gregory Position
                    </td>
                    <td className="px-6 py-4">0.7378</td>
                    <td className="px-6 py-4">0.7575</td>
                    <td className="px-6 py-4">0.7134</td>
                    <td className="px-6 py-4">0.7293</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto mt-8 rounded-xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm">
              <table className="w-full text-left text-sm text-neutral-300">
                <thead className="border-b border-neutral-800 bg-neutral-900/80 text-xs uppercase  ">
                  <tr>
                    <th scope="col" className="px-6 py-4 font-medium">
                      Task
                    </th>
                    <th scope="col" className="px-6 py-4 font-medium">
                      Accuracy
                    </th>
                    <th scope="col" className="px-6 py-4 font-medium">
                      Precision
                    </th>
                    <th scope="col" className="px-6 py-4 font-medium">
                      Recall
                    </th>
                    <th scope="col" className="px-6 py-4 font-medium">
                      F1 score
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800">
                  <tr className="hover:bg-neutral-800/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-neutral-200">
                      Pell & Gregory Class
                    </td>
                    <td className="px-6 py-4">0.7614</td>
                    <td className="px-6 py-4">0.6275</td>
                    <td className="px-6 py-4">0.5177</td>
                    <td className="px-6 py-4">0.5462</td>
                  </tr>
                  <tr className="hover:bg-neutral-800/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-neutral-200">
                      Pell & Gregory Position
                    </td>
                    <td className="px-6 py-4">0.7069</td>
                    <td className="px-6 py-4">0.7139</td>
                    <td className="px-6 py-4">0.6945</td>
                    <td className="px-6 py-4">0.7018</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto mt-5 rounded-xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm">
              <table className="w-full text-left text-sm text-neutral-300">
                <thead className="border-b border-neutral-800 bg-neutral-900/80 text-xs uppercase  ">
                  <tr>
                    <th scope="col" className="px-6 py-4 font-medium">
                      Task
                    </th>
                    <th scope="col" className="px-6 py-4 font-medium">
                      Accuracy
                    </th>
                    <th scope="col" className="px-6 py-4 font-medium">
                      Precision
                    </th>
                    <th scope="col" className="px-6 py-4 font-medium">
                      Recall
                    </th>
                    <th scope="col" className="px-6 py-4 font-medium">
                      F1 score
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800">
                  <tr className="hover:bg-neutral-800/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-neutral-200">
                      Winter’s Classification
                    </td>
                    <td className="px-6 py-4">0.8607</td>
                    <td className="px-6 py-4">0.8619</td>
                    <td className="px-6 py-4">0.8607</td>
                    <td className="px-6 py-4">0.8613</td>
                  </tr>
                  <tr className="hover:bg-neutral-800/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-neutral-200">
                      Pell & Gregory Class
                    </td>
                    <td className="px-6 py-4">0.7317</td>
                    <td className="px-6 py-4">0.5620</td>
                    <td className="px-6 py-4">0.4973</td>
                    <td className="px-6 py-4">0.5620</td>
                  </tr>
                  <tr className="hover:bg-neutral-800/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-neutral-200">
                      Pell & Gregory Position
                    </td>
                    <td className="px-6 py-4">0.7346</td>
                    <td className="px-6 py-4">0.7397</td>
                    <td className="px-6 py-4">0.7397</td>
                    <td className="px-6 py-4">0.7234</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="  text-xs md:text-xl m-10 leading-relaxed">
              We initially hypothesized that multi-task learning would
              universally enhance performance through shared representations.
              However, the data proved otherwise. The Single-Task models
              significantly outperformed the multi-task configurations for
              Winter's classification, achieving an accuracy of 0.8837 and an
              F1-score of 0.8820.
            </p>

            <p className="  text-xs md:text-xl m-10 leading-relaxed">
              Conversely, the Multi-3-Task models suffered from considerable
              negative transfer, leading to statistically significant declines
              in accuracy. This degradation likely occurred because the model
              struggled to balance the conflicting feature requirements of
              analyzing tooth angulation (Winter's) alongside burial depth (Pell
              & Gregory) during joint optimization. While the Multi-2-Task
              configuration did achieve comparable performance for Pell &
              Gregory and even improved recall, it did so at the cost of reduced
              precision. Ultimately, our research highlighted that while
              multi-task models might serve well as conservative pre-screening
              tools for impaction depth, single-task learning remains the
              superior choice for specialized dental classifications where
              precision is paramount.
            </p>
            <p className="  text-xs md:text-xl m-10 leading-relaxed"></p>

            <h2 className="text-3xl md:text-4xl text-white mb-6 font-normal tracking-tight">
              Achievements and Milestones
            </h2>
            <p className="  text-lg md:text-xl m-10 leading-relaxed">
              The culmination of our rigorous data collection, model training,
              and architectural troubleshooting has led to an exciting milestone
              for our research team. Our paper detailing the performance
              evaluation of EfficientNet-V2-S for impacted mandibular third
              molar classification has been officially accepted at the
              International Conference on Multimedia and Image Processing
              (ICMIP). We are thrilled to be taking our findings to the global
              stage and will be presenting our research in Sapporo, Japan, from
              April 25-27, 2026. This acceptance not only validates the hard
              work we poured into this project but also highlights the growing
              clinical relevance of AI-driven dental diagnostics.
            </p>
            <img
              src={icmip}
              alt=""
              className="mt-5 w-full rounded-xl"
            />
            <h2 className="text-3xl mt-5 md:text-4xl text-white mb-6 font-normal tracking-tight">
              Insights
            </h2>
            <p className="  text-lg md:text-xl m-10 leading-relaxed">
              This research paper was a trial of our patience. Countless of
              sleepness nights and braincells lost just by researching for the
              rrl was a nightmare. We battled our way through bugs of code,
              contradictions, and research mishaps to contribute to the world of
              A.I. in the field of dentistry. In my role as the lead author,
              coder, and project manager, I learned a lot of things. I learned
              that the most valuable factor to take care of is -- time. In the
              process of research, I admit I did slack off a little bit
              especially in December (it might have been the Christmas blues)
              but when I realized that time was running out, we quickly got our
              drive back together and finished the project. Setting up systems
              for time managment is essential. Using Kanban boards, knowledge
              management software (Notion) and calendars are one of things that
              made the project stay afloat. Another lesson I learned is
              teamwork. I don't want to bring up clichès like{" "}
              <i>Teamwork makes the dreamwork!</i> or{" "}
              <i>
                <b>O</b>ne <b>T</b>eam <b>O</b>ne <b>G</b>oal
              </i>{" "}
              or something like that. But it really is important. We wouldn't
              have gotten the research paper done without Chris' talking with
              advisers and researching the rrl, or Donie's research paper
              illustration and writing skills. It wouldn't be done without their
              contrubutions.
              <br />
              <br />
              The lessons I learned will be carried throughout my carreer and I
              will forever treasure this project as a significant bookmark in my
              life.
            </p>

            <div className="flex text-neutral-400 flex-col mt-7 items-center justify-center">
              <img
                src={ig}
                alt=""
                className="w-md align-center items-center rounded-xl"
              />
              <p>
                <i>*your</i>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
