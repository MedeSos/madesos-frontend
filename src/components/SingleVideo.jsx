import { ModalPopup } from "./SinglePost";

export default function SingleVideo({ rounded = "" }) {
  return (
    <>
      <ModalPopup>
        <div className={`flex flex-col shadow-trick overflow-hidden ${rounded}`}>
          {/* <div className="bg-neutral-300 h-1/2 bg-[url(https://picsum.photos/200)] bg-cover bg-center"></div> */}
          <div className="bg-slate-600 min-h-[300px] flex items-center">
            {/* <!-- <iframe class="w-full aspect-video" src="./../asset/video/demo.mp4"></iframe> --> */}
            <video controls muted className="w-full">
              <source src="./../asset/video/demo.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="p-6 bg-secondary min-h-1/2 relative">
            <div className="p-4 bg-white text-xs font-[275]">
              <small className="text-xs font-extralight">15-12-2024</small>
              <h1 className="text-xl font-semibold mb-1">Post Title Here</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero fugit necessitatibus, similique, harum est nihil earum consequatur commodi, enim recusandae sed voluptate repellendus placeat vitae. Deserunt amet porro hic! Ex
                molestias dolores quo facilis mollitia, nesciunt labore ipsam nemo nobis quasi neque, corporis modi totam aliquam vitae commodi sunt est delectus culpa? Incidunt, culpa ea. Eius nihil doloribus, alias possimus quos corporis,
                nam quaerat qui saepe ipsam velit? Debitis atque libero iste temporibus eaque obcaecati omnis molestiae perferendis? Eveniet non tenetur aspernatur cum aliquid? Recusandae impedit deserunt nesciunt voluptatum repellendus
                ducimus id mollitia dolorem vero officiis. Provident, nihil. Dolores, quos.
              </p>
              <div className="flex justify-end">
                <button className="px-2 bg-primary-dark text-white mt-5">Share</button>
              </div>
            </div>
          </div>
        </div>
      </ModalPopup>
    </>
  );
}
