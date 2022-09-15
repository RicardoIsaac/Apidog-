export function validate(input) {
    let errors = {}
    //
    if (!input.name) { errors.name = "Name is required" }
    else { errors.name = "" }
    //
    if (!input.weightMin) { errors.weightMin = "min_weight is required" }
    else { errors.weightMin = "" }
    //
    if (!input.weightMax) { errors.weightMax = "max_weight is required" }
    else { errors.weightMax = "" }
    //
    if (!input.heightMin) { errors.heightMin = "Heightmin is required" }
    else { errors.heightMin = "" }
    //

    if (!input.heightMax) { errors.heightMax = "max_height is required" }
    else { errors.heightMax = "" }

    //
    if (!input.lifeSpan) { errors.lifeSpan = "life_span is required" }
    else { errors.lifeSpan = "" }
    //
    if (input.weightMin > input.weightMax) { errors.peso = "Weight min cant be greatest than Weight max" }
    else { errors.peso = "" }
    //
    if (input.heightMin > input.heightMax) { errors.altura = "Height min cant be greatest than Height max" }
    else { errors.altura = "" }
    //
    if (input.weightMin < 0 || input.heightMin < 0 || input.lifeSpan < 0) { errors.number = "Cant be lower than 0" }
    else { errors.number = "" }
    return errors;
}