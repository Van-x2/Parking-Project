import json

def generate_id(column, row):
    initial_id = f"0000000000000{column}{row}"
    adjusted_id = initial_id if len(initial_id) == 15 else initial_id[1:]
    return adjusted_id

def create_data(column, start_row, end_row):
    data = []

    for current_row in range(start_row, end_row + 1):
        current_id = generate_id(column, current_row)

        input_data = {
            "id": current_id,
            "column": column,
            "row": current_row,
            "email": "blank.ksbe.edu",
            "name": "parkingarray",
            "status": 123,
            "orientstatus": 123,
            "time": "2022-01-01 10:00:00.123Z"
        }

        data.append(input_data)

    return data

def dump_all_data():
    all_data = []

    # Example usage for different columns and row counts
    all_data.extend(create_data("A", 1, 20))
    all_data.extend(create_data("B", 1, 18))
    all_data.extend(create_data("C", 1, 18))
    all_data.extend(create_data("D", 1, 19))
    all_data.extend(create_data("E", 1, 19))
    all_data.extend(create_data("F", 1, 24))
    all_data.extend(create_data("G", 1, 25))
    all_data.extend(create_data("H", 1, 21))
    all_data.extend(create_data("I", 1, 21))
    all_data.extend(create_data("J", 1, 21))
    all_data.extend(create_data("K", 1, 21))
    all_data.extend(create_data("L", 1, 27))

    # Save all data to a JSON file
    json_file_path = 'allData.json'
    with open(json_file_path, 'w') as json_file:
        json.dump(all_data, json_file, indent=2)

    print(f"Data dumped to {json_file_path}")

# Call the function to generate and save the JSON file
dump_all_data()
