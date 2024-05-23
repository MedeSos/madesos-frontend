import { useState } from "react";
import SinglePost from "./SinglePost";

export default function SingleBlog({ rounded = "" }) {
  const [readMore, setReadMore] = useState("overflow-y-hidden");
  rounded = "rounded-2xl";

  function HandleReadMore(e) {
    let readMoreBox = e.target.parentElement.parentElement;
    setReadMore("overflow-y-auto");
    readMoreBox.classList.add("hidden");
  }

  return (
    <>
      <SinglePost padding={"p-8"}>
        <div className={`flex flex-col shadow-trick ${rounded} overflow-hidden`}>
          <div className="bg-neutral-300 h-44 bg-[url(https://picsum.photos/200)] bg-cover bg-center"></div>
          {/* <!-- <div className="post-body p-5 bg-secondary grow overflow-y-auto relative"> --> */}
          <div className={`post-body p-5 bg-secondary grow ${readMore} relative`}>
            <small className="text-xs font-extralight">15-12-2024</small>
            <h1 className="text-xl font-semibold mb-1">Post Title Here</h1>
            <div className="post-content text-xs font-[275]">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero fugit necessitatibus, similique, harum est nihil earum consequatur commodi, enim recusandae sed voluptate repellendus placeat vitae. Deserunt amet porro hic! Ex
                molestias dolores quo facilis mollitia, nesciunt labore ipsam nemo nobis quasi neque, corporis modi totam aliquam vitae commodi sunt est delectus culpa? Incidunt, culpa ea. Eius nihil doloribus, alias possimus quos corporis,
                nam quaerat qui saepe ipsam velit? Debitis atque libero iste temporibus eaque obcaecati omnis molestiae perferendis? Eveniet non tenetur aspernatur cum aliquid? Recusandae impedit deserunt nesciunt voluptatum repellendus
                ducimus id mollitia dolorem vero officiis. Provident, nihil. Dolores, quos.
              </p>
              <img src="https://picsum.photos/200" alt="" className="w-full h-40 my-2 object-cover" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iste, amet natus expedita sequi distinctio necessitatibus odio hic ratione consequatur doloremque sint molestias dolore facere sit quibusdam, esse cum earum maiores
                obcaecati tenetur. Aperiam, error? Sequi debitis voluptatem adipisci doloribus rerum, dolorem voluptate perspiciatis cupiditate provident atque voluptas reiciendis nemo corrupti eum optio cum recusandae alias reprehenderit
                ratione nisi dicta. Quisquam ad non quidem animi modi veritatis eum consequatur consectetur nesciunt dolor est dolore numquam adipisci quam, excepturi inventore similique assumenda, placeat aliquam quae praesentium
                asperiores. Fugit reprehenderit sed atque, harum libero architecto ipsa expedita veritatis est amet beatae cumque a. Animi aperiam nostrum, id nihil mollitia ipsum. Numquam natus sunt dolores dolorum culpa veniam illum
                perferendis alias nobis, pariatur libero beatae aliquam explicabo ullam. Incidunt fugiat expedita mollitia nam amet ipsam, laborum optio deleniti numquam voluptatem ea atque at! Blanditiis dignissimos iusto atque. Minus
                nostrum sequi esse obcaecati nobis aut vel! Dolorem, quod quia. Porro harum recusandae, facilis voluptatum in, repudiandae sed beatae impedit possimus alias necessitatibus fugit cupiditate soluta voluptatibus, tempore vel
                consequatur iure unde delectus. Libero beatae corrupti dolor architecto voluptatum, veritatis deserunt doloremque, nostrum perspiciatis a dolores repellat accusamus. Ducimus rem fugit illum suscipit nobis earum. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Fuga amet ut laboriosam necessitatibus nobis asperiores, dolore quos aliquid laborum porro harum, nulla, dignissimos rem ea repellat quo. Eius, voluptates animi?
              </p>
            </div>

            {/* <!-- read more --> */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#B3CBD9] from-20%">
              <div className="h-full relative flex justify-center items-center">
                <button className="text-sm" onClick={HandleReadMore}>
                  Read More
                </button>
                <button className="bg-primary-dark text-sm text-white font-bold px-2 absolute right-5 font-light">Share</button>
              </div>
            </div>
            {/* <!-- read more end  --> */}
          </div>
        </div>
      </SinglePost>
    </>
  );
}
