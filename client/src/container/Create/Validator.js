export function validate(input) {
    let errors = {}
    //
    if (!input.name) { errors.name = "Name is required" }
    else { errors.name = "" }
    //
    if (!input.min_weight) { errors.min_weight = "min_weight is required" }
    else { errors.min_weight = "" }
    //
    if (!input.max_weight) { errors.max_weight = "max_weight is required" }
    else { errors.max_weight = "" }
    //
    if (!input.min_height) { errors.min_height = "Heightmin is required" }
    else { errors.min_height = "" }
    //

    if (!input.max_height) { errors.max_height = "max_height is required" }
    else { errors.max_height = "" }

    //
    if (!input.life_span) { errors.life_span = "life_span is required" }
    else { errors.life_span = "" }
    //
    if (input.min_weight > input.max_weight) { errors.peso = "Weight min cant be greatest than Weight max" }
    else { errors.peso = "" }
    //
    if (input.min_height > input.max_height) { errors.altura = "Height min cant be greatest than Height max" }
    else { errors.altura = "" }
    //
    if (input.min_weight < 0 || input.min_height < 0 || input.life_span < 0) { errors.number = "Cant be lower than 0" }
    else { errors.number = "" }
    return errors;
}