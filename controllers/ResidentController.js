const residents = 
  [
  {
    id: 1,
    firstName: "Juan",
    lastName: "Delacruz"
  },
  {
    id: 2,
    firstName: "Joshua",
    lastName: "Marcial"
  }
];

function GetAllResidents(req, res) 
{
  res.json(residents);
}

function GetResidentById(req, res)
{
  const id = Number(req.params.id);

  if(!Number.isInteger(id) || id <= 0 )
  {
    return res.status(400).json(
      {
        message: "Invalid resident ID"
      }
    );
  }

  const resident = residents.find(
    resident => resident.id === id
  );

  if(!resident)
  {
    return res.status(404).json(
      {
        message: "Resident not found!"
      }
    );
  }
  res.json(resident);
}

module.exports = 
{
  GetAllResidents, GetResidentById
};


