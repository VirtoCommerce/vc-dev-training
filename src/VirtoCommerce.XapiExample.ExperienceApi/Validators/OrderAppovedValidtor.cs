using FluentValidation;

namespace VirtoCommerce.XapiExample.ExperienceApi.Validators;

public class OrderAppovedValidtor : AbstractValidator<OrderValidatonContext>
{
    public OrderAppovedValidtor()
    {
        RuleFor(x => x).Custom((orderContext, context) =>
        {
            if (orderContext.Aggregate.Order.IsApproved)
            {
                context.AddFailure("Order is already approved");
            }
        });
    }
}
