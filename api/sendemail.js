console.log("Jam njesh");

export default async function handler(req, res) {
  res.status(200).json({ message: 'Function invoked successfully!' });
}
