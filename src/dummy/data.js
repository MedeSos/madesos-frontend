
const dummyData = {
  title: "Lorem ipsum dolor sit amet",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, commodi doloremque nostrum dolores expedita sed voluptatibus odit enim tenetur quos?",
  creatdAt: "15-12-2024",
  updatedAt: "15-12-2024",
  image: "https://picsum.photos/200",
}

export default function generateData(count, data = dummyData) {
  let dummyArrayData = [];
  while (count > 0) {
    dummyArrayData.push({ ...data });
    count--;
  }
  return {
    count: dummyArrayData.length,
    blogs:dummyArrayData
  };
}