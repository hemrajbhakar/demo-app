// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "POST") {
    let body = JSON.parse(req.body);
    let mult = body.a * body.b;
    let sum = parseInt(body.a) + parseInt(body.b);
    if (body.calc_type === "sum") {
      res.status(200).json({ result: sum });
    } else {
      res.status(200).json({ result: mult });
    }
  } else {
    return null;
  }
}
