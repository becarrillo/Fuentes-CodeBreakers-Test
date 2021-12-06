

let getAdvances = (args) => {

}

let getAdvanceById = (args) => {
    advanceById(args.advanceId);
}

let getProjects = (args) => {
    projectsMany(args.name);
}

const root = {
    advanceById: getAdvanceById,
    advances: getAdvances
};
module.exports = root;