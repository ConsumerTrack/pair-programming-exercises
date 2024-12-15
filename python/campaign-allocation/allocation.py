def allocate_budget(budget, campaigns):
    """
    Allocates a budget across multiple campaigns based on priority.

    Args:
        budget (float): The total budget amount.
        campaigns (list): A list of dictionaries, each with:
            - campaign_id (str): Unique identifier for the campaign.
            - priority (int): Campaign priority (1, 2, or 3).
            - requested_amount (float): Amount requested by the campaign.

    Returns:
        list: A list of dictionaries, each with:
            - campaign_id (str): Unique identifier for the campaign.
            - requested_amount (float): Amount requested by the campaign.
            - allocated_amount (float): Amount allocated to the campaign.

    Raises:
        ValueError: If the input format is invalid or incomplete.
    """

    # Placeholder: This function needs to be implemented
    # Add your logic here to allocate the budget based on priorities

    return campaigns


if __name__ == "__main__":
    # Example usage (replace with actual test data)
    test_budget = 100000.0
    test_campaigns = [
        {"campaign_id": "C1", "priority": 1, "requested_amount": 50000},
        {"campaign_id": "C2", "priority": 2, "requested_amount": 30000},
        {"campaign_id": "C3", "priority": 3, "requested_amount": 20000},
    ]

    allocated_campaigns = allocate_budget(test_budget, test_campaigns)
    print(allocated_campaigns)
