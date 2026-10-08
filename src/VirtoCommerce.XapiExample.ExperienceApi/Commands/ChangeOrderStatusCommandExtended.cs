using VirtoCommerce.XOrder.Core.Commands;

namespace VirtoCommerce.XapiExample.ExperienceApi.Commands;

public class ChangeOrderStatusCommandExtended : ChangeOrderStatusCommand
{
    public string RejectionReason { get; set; }
}
